<template>
<div id="divMainNode">
    <div id="columnNodes">
        <draggable>
            <div id="columnNodeNumber" draggable="true" @dragend="onDragFinish($event, item)" @dragenter="onDragStart('nodeNumber')">
                <h4> Número </h4>
            </div>
        </draggable>
    </div>
    <div id="drawflow">
    </div>
</div>
</template>

<script>
import * as Vue from 'vue'
/*eslint-disable */
import NodeClick from '../components/NodeClick.vue'
import Drawflow from 'drawflow'
import styleDrawflow from 'drawflow/dist/drawflow.min.css' // eslint-disable-line no-use-before-define
/*eslint-enable */

export default{
    data(){
        return{
           editor: null,
           columnNode: "",
           pos_x: 0,
           pos_y: 0
        }
    },
    methods:{
        onDragFinish(event, item){
            console.log(event +" - "+item)
            this.columnNode = ""
            console.log("Este es columnNode: "+this.columnNode)
        },
        onDragStart(node){
            this.columnNode = node
            console.log(this.columnNode)
        }
    },
     mounted() {    
        const id = document.getElementById("drawflow");
        this.editor = new Drawflow(id, Vue, this);
        this.pos_x = 5
        this.editor.start();
        const props = {};
        const options = {};
        this.editor.registerNode('NodeClick', NodeClick, props, options);
        const data = {};
        this.editor.addModule("hola")
        this.editor.addNode('Name', 0, 1, 150, 300, 'Class', data, 'NodeClick', 'vue');
        this.editor.addNode('Name', 1, 2, 50, 50, 'Class', data, 'NodeClick', 'vue');
        this.editor.draggable_inputs = true
        this.editor.on('mouseMove', function(position) {
        this.pos_x = position.x
        //console.log('Position mouse x:' + position.x + ' y:'+ position.y);
        })
  },
}
</script>
<style>
#app {

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
  height: 75vh;
  border: 1px solid rgb(0, 0, 0);
  position: relative;
  text-align:initial;
}
</style>
