<template>
    <div id="container">
        <div id="headerDiv">
            <div class="headerButtonDiv">
                <button @click="compileNodes" class="button">
                    Compilar nodos a Javascript 
                </button>
            </div>
            <div class="headerButtonDiv ">
                <button class="button">
                    Compilar nodos a Python
                </button>
            </div>
            <div class="headerButtonDiv">
                <button @click="exportDat" class="button">
                    Guardar programa
                </button>
            </div>
            <div class="headerButtonDiv">
                <router-link :to="'/'+route">
                <button class="button">
                    Cargar programa
                </button>
                </router-link>
            </div>
        </div>
        <div id="divMainNode">
            <div id="columnNodes">
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('NumberNode')" >
                        <h4> Número </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('SumNode')">
                        <h4> Suma </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('SubtractionNode')">
                        <h4> Resta </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('MultiplicationNode')">
                        <h4> Multiplicación </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('DivisionNode')">
                        <h4> División </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('IfNode')">
                        <h4> Condicional If </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('CodeBlockNode')">
                        <h4> Bloque de código </h4>
                    </div>
                    <div class="drag-drawflow"  draggable="true" @dragstart="onDragStart('ForNode')">
                        <h4> Desde - hasta </h4>
                    </div>
            </div>
            <div id="drawflow" @drop="dropEvent" @dragover="allowDrop">
            </div>
        </div>
        <div id="footerDiv">
            <textarea id="textAreaFooter" v-model="textAreaValue"></textarea>
        </div>
    </div>
</template>

<script>
import * as Vue from 'vue'
/*eslint-disable */
import NumberNode from './Nodes/NumberNode.vue'
import SumNode from './Nodes/SumNode.vue'
import SubtractionNode from './Nodes/SubtractionNode.vue'
import MultiplicationNode from './Nodes/MultiplicationNode.vue'
import DivisionNode from './Nodes/DivisionNode.vue'
import IfNode from './Nodes/IfNode.vue'
import ForNode from './Nodes/ForNode.vue'
import CodeBlockNode from './Nodes/CodeBlockNode.vue'
import Drawflow from 'drawflow'
import HandlerString from '../Handler/HandlerString'
import styleDrawflow from 'drawflow/dist/drawflow.min.css' // eslint-disable-line no-use-before-define
/*eslint-enable */

export default{
    data(){
        return{
           editor: null,
           columnNode: "",
           pos_x: 649,
           pos_y: 367,
           inFocus: false,
           node_selected: "",
           variables: [],
           textAreaValue: "",
           javascriptCode: "",
           pythonCode: "",
           route:"myprograms"
        }
    },
    methods:{
        exportDat(){
            var exportdata = this.editor.export();
            console.log(exportdata)
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        dropEvent(event){
            let point = document.elementFromPoint(this.pos_x, this.pos_y).closest("#drawflow");
            if(point != null){
                const pos_x= event.clientX * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * (this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
                const pos_y= event.clientY * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * (this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));
                switch(this.columnNode){
                    case "NumberNode":
                        this.editor.addNode(this.columnNode, 0, 1, pos_x, pos_y, this.columnNode, {value: 0, id: ""}, this.columnNode, 'vue');
                        break;
                    case "IfNode":
                        this.editor.addNode(this.columnNode, 0, 2, pos_x, pos_y, this.columnNode, {value: "", boolValue: ""}, this.columnNode, 'vue');
                        break;
                    case "CodeBlockNode":
                        this.editor.addNode(this.columnNode, 1, 1, pos_x, pos_y, this.columnNode, {valueblock: ""}, this.columnNode, 'vue');
                        break;
                    case "ForNode":
                        this.editor.addNode(this.columnNode, 0, 1, pos_x, pos_y, this.columnNode, {valuei: 0, valueof: 0}, this.columnNode, 'vue');
                        break;
                    default: 
                    this.editor.addNode(this.columnNode, 2, 1, pos_x, pos_y, this.columnNode, {value: 0, id: ""}, this.columnNode, 'vue');
                        break;
                }
            }else{
                event.preventDefault();
            }
        },
        onDragStart(node){
            this.columnNode = node
        },
        updateSumById(node){
            var input1_id = this.editor.getNodeFromId(node).inputs.input_1.connections
            var input2_id = this.editor.getNodeFromId(node).inputs.input_2.connections
            if(input1_id.length != 0){
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)+parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }   
            }else{
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    this.editor.updateNodeDataFromId(node, {value: 0})
                }
            }
        },
        updateSubtractionById(node){
            var input1_id = this.editor.getNodeFromId(node).inputs.input_1.connections
            var input2_id = this.editor.getNodeFromId(node).inputs.input_2.connections
            if(input1_id.length != 0){
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)-parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }   
            }else{
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: -total})
                }else{
                    this.editor.updateNodeDataFromId(node, {value: 0})
                }
            }
        },
        updateMultiplicationById(node){
            var input1_id = this.editor.getNodeFromId(node).inputs.input_1.connections
            var input2_id = this.editor.getNodeFromId(node).inputs.input_2.connections
            if(input1_id.length != 0){
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)*parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }   
            }else{
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    this.editor.updateNodeDataFromId(node, {value: 0})
                }
            }
        },
        updateDivisionById(node){
            var input1_id = this.editor.getNodeFromId(node).inputs.input_1.connections
            var input2_id = this.editor.getNodeFromId(node).inputs.input_2.connections
            if(input1_id.length != 0){
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)/parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }else{
                    const total = parseInt(this.editor.getNodeFromId(input1_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: total})
                }   
            }else{
                if(input2_id.length != 0){
                    const total = parseInt(this.editor.getNodeFromId(input2_id[0].node).data.value)
                    this.editor.updateNodeDataFromId(node, {value: 1/total})
                }else{
                    this.editor.updateNodeDataFromId(node, {value: 0})
                }
            }
        },
        updateNode(node){
            switch(this.editor.getNodeFromId(node).class){
                        case "SumNode":
                            this.updateSumById(node)
                            break;
                        case "SubtractionNode":
                            this.updateSubtractionById(node)
                            break;
                        case "MultiplicationNode":
                            this.updateMultiplicationById(node)
                            break;
                        case "DivisionNode":
                            this.updateDivisionById(node)
                            break;
                        default:
                    }
        },
        compileNodes(){
            this.javascriptCode = ""
            this.textAreaValue = "¡Traduciendo a código!"+"\n"+"..."+"\n";
            this.javascriptCode += HandlerString.generateJavascriptCode(this.editor, this.editor.getNodesFromName("NumberNode"), this.editor.getNodesFromName("SumNode"),
                this.editor.getNodesFromName("SubtractionNode"), this.editor.getNodesFromName("MultiplicationNode"), this.editor.getNodesFromName("DivisionNode"),
                    this.editor.getNodesFromName("IfNode"), this.editor.getNodesFromName("ForNode"), this.editor.getNodesFromName("CodeBlockNode"))
            this.textAreaValue += "\n"+ this.javascriptCode;
            try{
                var a = eval(this.javascriptCode)
                console.log(a)
                this.textAreaValue += "\n"+"\n"+"***********************************"+"\n"+"¡El código se ha ejecutado correctamente!"

            }catch(error){
                console.log(error)
                this.textAreaValue += "\n"+"***********************************"+"\n"+"El código tuvo un error: "+error;
            }
        },
        checkConnections(event){
            if(this.editor.getNodeFromId(event).outputs.output_1.connections.length != 0){
                for(const i in this.editor.getNodeFromId(event).outputs.output_1.connections){
                    var node = this.editor.getNodeFromId(event).outputs.output_1.connections[i].node
                    this.updateNode(node)
                    if(this.editor.getNodeFromId(node).outputs.output_1.connections.length != 0){
                        this.checkConnections(node)
                    }
                }
            }
        }
    },
    mounted() {    
        const self = this
        const id = document.getElementById("drawflow");
        this.editor = new Drawflow(id, Vue, this);
        this.editor.start();
        this.editor.registerNode('NumberNode', NumberNode, {}, {});
        this.editor.registerNode('SumNode', SumNode, {}, {});
        this.editor.registerNode('SubtractionNode', SubtractionNode, {}, {});
        this.editor.registerNode('MultiplicationNode', MultiplicationNode, {}, {});
        this.editor.registerNode('DivisionNode', DivisionNode, {}, {});
        this.editor.registerNode('IfNode', IfNode, {}, {});
        this.editor.registerNode('CodeBlockNode', CodeBlockNode, {}, {});
        this.editor.registerNode('ForNode', ForNode, {}, {});
        this.editor.on('nodeCreated', function(event) {
            if(self.editor.getNodeFromId(event).class == "NumberNode" || self.editor.getNodeFromId(event).class == "SumNode" || self.editor.getNodeFromId(event).class == "SubtractionNode" ||
                self.editor.getNodeFromId(event).class == "MultiplicationNode" || self.editor.getNodeFromId(event).class == "DivisionNode"){
                    self.editor.updateNodeDataFromId(event, {value: 0, id: "node"+event})
            }
        })
        this.editor.on('connectionCreated', function(event) {
            const nodeInfo = self.editor.getNodeFromId(event.input_id);
            if(nodeInfo.inputs[event.input_class].connections.length > 1) {
                const removeConnectionInfo = nodeInfo.inputs[event.input_class].connections[0];
                self.editor.removeSingleConnection(removeConnectionInfo.node, event.input_id, removeConnectionInfo.input, event.input_class);
            }
            self.updateNode(event.input_id)
        })
        this.editor.on('mouseMove', function(event) {
            self.pos_x=event.x
            self.pos_y=event.y
        })
        this.editor.on('connectionRemoved', function(event) {
            self.updateNode(event.input_id)
        })
        this.editor.on('nodeDataChanged', function(event) {
           self.checkConnections(event);
            if(self.editor.getNodeFromId(event).class == "IfNode"){
                var a;
                var value = self.editor.getNodeFromId(event).data.value;
                var newValue= value;
                try{
                    for(let f = 0 ; f < value.split(" ").length ; f++){
                        if(value.split(" ")[f].includes("node") && value.split(" ")[f].length == 5){
                            var id = value.split(" ")[f][4]
                            newValue = value.replace('node'+id, self.editor.getNodeFromId(id).data.value)}
                    }
                   a = eval(newValue)
                }catch(error){
                    a = null
                }
                if(a == true || a == false){
                    self.editor.updateNodeDataFromId(event, {value: value, boolValue: a})
                }else if(a == null){
                    self.editor.updateNodeDataFromId(event, {value: value, boolValue: ""})
                }
            }
        })
    },
}
</script>
<style scoped>
#footerDiv{
    height: 26.5vh;
}
#divMainNode{
    display: flex;
}
#columnNodes{
  width: 30vh;
  margin-right: 5px;
  border: 1px solid rgb(0, 0, 0);
}
#drawflow {
  width: 100%;
  height: 62vh;
  position: relative;
  text-align:initial;
  border: 1px solid rgb(0, 0, 0);
  pointer-events:visible;
  box-shadow: 5px 3px #888888;
}
.drag-drawflow{
    margin-top: -2vh;
    border-bottom: 1px solid rgb(0, 0, 0) ;
    height: 5vh;
    margin-left: 2vh;
    margin-right: 2vh;
}
#textAreaFooter{
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 96%;
    width: 100%;
    border: 1px solid rgb(0, 0, 0);
}
#headerDiv{
    display: flex;
    margin-top: -6vh;
    height: 10vh;
}
.headerButtonDiv{
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
h4{
    line-height: 5vh;
}
.button {
  padding: 0.5vh 1vh;
  font-size: 2vh;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
}

.button:hover {background-color: #d6d6d6}

.button:active {
  background-color: #9b9999;
  box-shadow: 0 4px #999;
  transform: translateY(3px);
}
</style>
