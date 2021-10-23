
class HandlerString{

    static generateJavascriptCode(editor, NumberNode, SumNode, SubtractionNode, MultiplicationNode, DivisionNode, IfNode, ForNode, CodeBlockNode){
        var javascriptCode= ""
        javascriptCode += this.convertNumberNodeToCode(NumberNode, editor, "javascript")
        javascriptCode += this.convertOperatorToCode(SumNode , editor, "+", "javascript")
        javascriptCode += this.convertOperatorToCode(SubtractionNode , editor, "-", "javascript")
        javascriptCode += this.convertOperatorToCode(MultiplicationNode , editor, "*", "javascript")
        javascriptCode += this.convertDivisionToCode(DivisionNode , editor, "javascript")
        javascriptCode += this.convertIntructionsToJavascript(IfNode, ForNode, CodeBlockNode, editor)
        console.log(this.javascriptCode)
        return javascriptCode
    }

    static convertNumberNodeToCode(numberNode, editor, language){
        var javascriptCode = "\n";
        var variable = "var"
        if(language == "python"){
            variable = ""
        }
        for(let i of numberNode){
            javascriptCode+=variable+" node"+editor.getNodeFromId(i).id+" = "+editor.getNodeFromId(i).data.value+";"+"\n";
        }
        return javascriptCode;
    }

    //This function is only for + , - and * operation, / needs other function
    static convertOperatorToCode(SumNode, editor, operation, language){
        var javascriptCode = "";
        var variable = "var"
        if(language == "python"){
            variable = ""
        }
        for(let i of SumNode){
            javascriptCode+=variable+" node"+editor.getNodeFromId(i).id+" = ";
            var input1_id = editor.getNodeFromId(i).inputs.input_1.connections
            var input2_id = editor.getNodeFromId(i).inputs.input_2.connections
            if(input1_id != 0 && input2_id != 0){
                javascriptCode+="node"+editor.getNodeFromId(input1_id[0].node).id+" "+operation+" node"+editor.getNodeFromId(input2_id[0].node).id+";"+"\n";
            }else if(input2_id != 0){
                if(operation == "-"){
                    javascriptCode+="- node"+editor.getNodeFromId(input2_id[0].node).id+";"+"\n";
                }else{
                    javascriptCode+="node"+editor.getNodeFromId(input2_id[0].node).id+";"+"\n";
                }
            }else if(input1_id != 0){
                javascriptCode+="node"+editor.getNodeFromId(input1_id[0].node).id+";"+"\n";
            }else{
                javascriptCode+="0;"+"\n";
            }
        }
        return javascriptCode;
    }

    static convertDivisionToCode(DivisionNode, editor, language){
        var javascriptCode = "";
        var variable = "var"
        if(language == "python"){
            variable = ""
        }
        for(let i of DivisionNode){
            javascriptCode+=variable+" node"+editor.getNodeFromId(i).id+" = ";
            var input1_id = editor.getNodeFromId(i).inputs.input_1.connections
            var input2_id = editor.getNodeFromId(i).inputs.input_2.connections
            if(input1_id != 0 && input2_id != 0){
                javascriptCode+="node"+editor.getNodeFromId(input1_id[0].node).id+" / node"+editor.getNodeFromId(input2_id[0].node).id+";"+"\n";
            }else if(input2_id != 0){
                javascriptCode+="1 / node"+editor.getNodeFromId(input2_id[0].node).id+";"+"\n";
            }else if(input1_id != 0){
                javascriptCode+="node"+editor.getNodeFromId(input1_id[0].node).id+";"+"\n";
            }else{
                javascriptCode+="0;"+"\n";
            }
        }
        return javascriptCode;
    }

    static convertIntructionsToJavascript(IfNode, ForNode, BlockNode, editor){
        var javascriptCode="\n";
        var blockNodesUser= [-50]
        for(let i of IfNode){
            javascriptCode+="if("+editor.getNodeFromId(i).data.value+"){"+"\n";
            var output_1 = editor.getNodeFromId(i).outputs.output_1.connections   
            var output_2 = editor.getNodeFromId(i).outputs.output_2.connections  
            if(output_1 != 0 && output_2 != 0){
                javascriptCode+= "  "+editor.getNodeFromId(output_1[0].node).data.valueblock+"\n"+"}else{"+"\n"+" "+editor.getNodeFromId(output_2[0].node).data.valueblock+"\n"+"};"+"\n";
                blockNodesUser.push(output_1[0].node)
                blockNodesUser.push(output_2[0].node)
            }else if(output_1 != 0){
                javascriptCode+= "  "+editor.getNodeFromId(output_1[0].node).data.valueblock+"\n"+"}"+"\n";
                blockNodesUser.push(output_1[0].node)
            }else if(output_2 != 0){
                javascriptCode+= "}else{"+"\n"+" "+editor.getNodeFromId(output_2[0].node).data.valueblock+"\n"+"};"+"\n";
                blockNodesUser.push(output_2[0].node)
            }else{
                javascriptCode+="};"+"\n";
            }
        }
        javascriptCode+="\n";
        for(let i of ForNode){
            javascriptCode+= "for(let i="+editor.getNodeFromId(i).data.valuei+"; i < "+editor.getNodeFromId(i).data.valueof+"; i++){"+"\n";
            var output_3 = editor.getNodeFromId(i).outputs.output_1.connections
            if(output_3!= 0){
                javascriptCode+="   "+editor.getNodeFromId(output_3[0].node).data.valueblock+"\n"+"};"+"\n";
                blockNodesUser.push(output_3[0].node)
            }else{
                javascriptCode+="};"+"\n";
            }
        }
        javascriptCode+="\n";
        for(let i of BlockNode){
            if(!blockNodesUser.includes(i.toString())){
                javascriptCode+= editor.getNodeFromId(i).data.valueblock +"\n";
            }
        }
        return javascriptCode
    }
    
    static convertIntructionsToPython(IfNode, ForNode, BlockNode, editor){
        var pythonCode="\n";pythonCode
        var blockNodesUser= [-50]
        for(let i of IfNode){
            pythonCode+="if "+editor.getNodeFromId(i).data.value+":"+"\n";
            var output_1 = editor.getNodeFromId(i).outputs.output_1.connections   
            var output_2 = editor.getNodeFromId(i).outputs.output_2.connections  
            if(output_1 != 0 && output_2 != 0){
                pythonCode+= "  "+editor.getNodeFromId(output_1[0].node).data.valueblock+"\n"+"else:"+"\n"+" "+editor.getNodeFromId(output_2[0].node).data.valueblock+"\n";
                blockNodesUser.push(output_1[0].node)
                blockNodesUser.push(output_2[0].node)
            }else if(output_1 != 0){
                pythonCode+= "  "+editor.getNodeFromId(output_1[0].node).data.valueblock+"\n"+"}"+"\n";
                blockNodesUser.push(output_1[0].node)
            }else if(output_2 != 0){
                pythonCode+= "}else{"+"\n"+" "+editor.getNodeFromId(output_2[0].node).data.valueblock+"\n";
                blockNodesUser.push(output_2[0].node)
            }else{
                pythonCode+="\n";
            }
        }
        pythonCode+="\n";
        for(let i of ForNode){
            pythonCode+= "for x in range("+editor.getNodeFromId(i).data.valuei+", "+editor.getNodeFromId(i).data.valueof+"):"+"\n";
            var output_3 = editor.getNodeFromId(i).outputs.output_1.connections
            if(output_3!= 0){
                pythonCode+="   "+editor.getNodeFromId(output_3[0].node).data.valueblock+"\n"+"\n";
                blockNodesUser.push(output_3[0].node)
            }else{
                pythonCode+="\n"+"\n";
            }
        }
        for(let i of BlockNode){
            if(!blockNodesUser.includes(i.toString())){
                pythonCode+= editor.getNodeFromId(i).data.valueblock +"\n";
            }
        }
        return pythonCode;
    }

}
export default HandlerString;