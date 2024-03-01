/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {DndContext, closestCorners, useDroppable} from '@dnd-kit/core';
import InputField from "@/components/common/InputField";

function List() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
                <InputField type="text" label="Textbox" inputType="text" _name="txtBox"/>
                <InputField type="text" label="Textbox" inputType="text" _name="txtBox1"/>
            </div>
        </div>
    );
}

function Canvas(props){
    const {setNodeRef} = useDroppable({
        id: 'canvas',
      });
    return (
        <Card className="h-full border border-gray-400 p-4" ref={setNodeRef}>        
            {props.canvasItems.map((item, index) => (
                <div key={index}>
                    <label>{item.label}</label>
                    <input type={item.inputType} name={item._name} />
                </div>
            ))}
        </Card>
    )
}

function FormPage() {
  const inputOptions = ["Textbox", "Textarea", "Checkbox", "Paragraph", "Dropdown", "Radio Button"];
  const decorationOptions = ["H1 Tag", "H2 Tag", "H3 Tag", "H4 Tag", "H5 Tag", "H6 Tag"];

  const [canvasItems, setCanvasItems] = useState([]);

  function handleDragEnd({over}){
    console.log(over);
    if (over && over.id === "canvas") {
        setCanvasItems([...canvasItems, {id:1, label:"Textbox", inputType:"text", _name:"txtBox"}])
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">

            {/* Left part */}
            <div className="w-3/4 h-full">
                <Canvas canvasItems={canvasItems}/>
            </div>

            {/* Right part */}    
            <div className="w-1/4 h-full">
                <List/>
            </div>

        </div>
    </DndContext>
  );
}

export default FormPage;
