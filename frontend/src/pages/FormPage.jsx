/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import InputField from "@/components/InputFields/InputField";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function List() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="mb-4">
                <InputField type="text" label="Some label" inputType="text"/>
                <InputField type="radio" label="Some different label" inputType="radio"/>
            </div>
        </div>
    );
}

function Canvas(props){
    const [canvasItems, setCanvasItems] = useState([]);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'input',
        drop: (item) => {
            setCanvasItems([...canvasItems, item]);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      });
    return (
        <Card ref={dropRef} className="h-full border border-gray-400 p-4">        
            {canvasItems.map((item, index) => (
                <div key={index}>
                    <label htmlFor={item.id}>{item.label}</label>
                    <input type={item.inputType} />
                </div>
            ))}
        </Card>
    )
}


function FormPage() {
  const inputOptions = ["Textbox", "Textarea", "Checkbox", "Paragraph", "Dropdown", "Radio Button"];
  const decorationOptions = ["H1 Tag", "H2 Tag", "H3 Tag", "H4 Tag", "H5 Tag", "H6 Tag"];

  return (
    <DndProvider backend={HTML5Backend}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">


            {/* Left part */}
            <div className="w-3/4 h-full">
                <Canvas/>
            </div>

            {/* Right part */}    
            <div className="w-1/4 h-full">
                <List/>
            </div>

        </div>
    </DndProvider>
  );
}

export default FormPage;
