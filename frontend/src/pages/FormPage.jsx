/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {DndContext, DragOverlay, useDroppable} from '@dnd-kit/core';
import TextField from "@/InputFields/TextField";
import EmailField from "@/InputFields/EmailField";
import RadioField from "@/InputFields/RadioField";

function List(props) {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
                <TextField/>
                <EmailField/>
                <RadioField/>
                <DragOverlay>
                    {props.draggedElement}
                </DragOverlay> 
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
                <div key={index} className="flex flex-col w-[100%]">
                    <label>{item.label}</label>
                    <input type={item.inputType} name={item._name} id={item.id} className="border-2 border-gray-400"/>
                </div>
            ))}
        </Card>
    )
}

function FormPage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);

  function handleDragEnd({over}){
    const inputType = draggedElement.type.name;
    console.log(inputType)
    if (over && over.id === "canvas") {
        setCanvasItems([...canvasItems, 
            {
                id:`${inputType}-${Date.now()}`,                                          /* UNIQUE ID IS GENERATED BASED ON CURRENT DATETIME */
                label:inputType,                                                          /* LABEL IS GENERATED BASED ON INPUT TYPE */                                                
                inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase(),   /* REMOVES THE STRING 'FIELD' AND USES THE REMAINING STRING AS INPUT ATTRIBUTE */
                _name:"test"                                                              /* PLACEHOLDER NAME */
            }]);
        }
  }

  const handleDragStart = (event) => {
    const inputType = event.active.id.split("-")[0];
    if (inputType === "textfield") {
        setDraggedElement(<TextField/>);
    }
    else if(inputType === "emailfield"){
        setDraggedElement(<EmailField/>)
    }
    else if (inputType === "radiofield") {
        setDraggedElement(<RadioField/>)
    }
    console.log(event.active.id);
};

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">

            {/* Left part */}
            <div className="w-3/4 h-full">
                <Canvas canvasItems={canvasItems}/>
            </div>

            {/* Right part */}    
            <div className="w-1/4 h-full">
                <List draggedElement={draggedElement}/>
            </div>

        </div>
    </DndContext>
  );
}

export default FormPage;
