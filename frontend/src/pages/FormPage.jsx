/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {DndContext, useDroppable, DragOverlay} from '@dnd-kit/core';

import TextField from "@/InputFields/TextField";
import EmailField from "@/InputFields/EmailField";
import RadioField from "@/InputFields/RadioField";
import TextAreaField from "@/InputFields/TextAreaField";
import NumberField from "@/InputFields/NumberField";
import TelField from "@/InputFields/TelePhoneField";
import SelectField from "@/InputFields/SelectField";
import FileField from "@/InputFields/FileField";
import DataListField from "@/InputFields/DataListField";
import CheckBoxField from "@/InputFields/CheckBoxField";

function List(props) {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
                <div className=" font-light text-3xl text-center mb-3">Input Fields</div>
                <TextField/>
                <EmailField/>
                <NumberField/>
                <TelField/>
                <TextAreaField/>
                <SelectField/>
                <DataListField/>
                <RadioField/>
                <CheckBoxField/>
                <FileField/>
                <DragOverlay>
                    {props.draggedElement}
                </DragOverlay>
            </div>
        </div>
    );
}

function Canvas(props){

    function renderElement(element){
        console.log(element.inputType)
        if (element.inputType === "textarea") {
            return <textarea name={element._name} id={element.id} cols="30" rows="8" className="border-2 border-gray-400 resize-none"></textarea>
        }
        else if (element.inputType === "select") {
            return (
                <select name="select" className='border-2 rounded border-gray-400 h-10 p-1'>
                    <option value="opt1">Option-1</option>
                    <option value="opt2">Option-2</option>
                    <option value="opt3">Option-3</option>
                </select>
            )
        }
        else if (element.inputType === "radio") {
            return (
                <>
                    <div>
                        <input type="radio"  name="opt-1" className='mr-1'/>
                        <label>Option-1</label>
                    </div>
                    <div>
                        <input type="radio"  name="opt-1" className='mr-1'/>
                        <label>Option-2</label>
                    </div>
                    <div>
                        <input type="radio"  name="opt-1" className='mr-1'/>
                        <label>Option-3</label>
                    </div>
                </>
            )
        }
        else if (element.inputType === "datalist") {
            console.log("sadjnas")
            return (
                <div>
                    <input list={element.list} className="border-2 border-gray-400 w-[100%] h-8 p-2"/>
                    <datalist id={element.list}>
                        <option value="val1"/>
                        <option value="val2"/>
                        <option value="val3"/>
                    </datalist>
                </div>
            )
        }
        else if (element.inputType === "checkbox") {
            return (
                <>
                    <div>
                        <input type="checkbox"  name="opt-1" className='mr-1'/>
                        <label>Option-1</label>
                    </div>
                    <div>
                        <input type="radio"  name="opt-1" className='mr-1'/>
                        <label>Option-2</label>
                    </div>
                </>
            )
        }
        else{
            return <input type={element.inputType} name={element._name} id={element.id} className="border-2 border-gray-400"/>
        }
    }

    const {setNodeRef} = useDroppable({
        id: 'canvas',
      });
    return (
        <Card className="min-h-full border border-gray-400 p-4" ref={setNodeRef}>        
            {props.canvasItems.map((item, index) => (
                <div key={index} className="flex flex-col w-[100%]">
                    <label>{item.label}</label>
                    { renderElement(item) }
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
    console.log(`type of input: ${inputType}`)
    if (over && over.id === "canvas") {
        if (inputType === "DataListField") {
            setCanvasItems([...canvasItems,{                             //HANDLES DATALIST FIELD SPECIALLY
                id:`${inputType}-${Date.now()}`,
                label:inputType,
                list:`list${Date.now()}`,
                inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase(),
                _name:"test" 
            }])
        }
        else{
            setCanvasItems([...canvasItems, 
                {
                    id:`${inputType}-${Date.now()}`,                                          /* UNIQUE ID IS GENERATED BASED ON CURRENT DATETIME */
                    label:inputType,                                                          /* LABEL IS GENERATED BASED ON INPUT TYPE */                                                
                    inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase(),   /* REMOVES THE STRING 'FIELD' AND USES THE REMAINING STRING AS INPUT ATTRIBUTE */
                    _name:"test"                                                              /* PLACEHOLDER NAME */
            }]);
        }
    }
    console.log(canvasItems)
  }

  const handleDragStart = (event) => {
    const inputType = event.active.id.split("-")[0];
    console.log(`inputType: ${inputType}`)
    if (inputType === "textfield") {
        setDraggedElement(<TextField isDragging={true}/>);
    }
    else if(inputType === "emailfield"){
        setDraggedElement(<EmailField isDragging={true}/>)
    }
    else if (inputType === "radiofield") {
        setDraggedElement(<RadioField isDragging={true}/>)
    }
    else if (inputType === "textareafield") {
        setDraggedElement(<TextAreaField isDragging={true}/>)
    }
    else if (inputType === "numberfield") {
        setDraggedElement(<NumberField isDragging={true}/>)
    }
    else if (inputType === 'telfield') {
        setDraggedElement(<TelField isDragging={true}/>)
    }
    else if (inputType === 'selectfield') {
        setDraggedElement(<SelectField isDragging={true}/>)
    }
    else if (inputType === 'filefield') {
        setDraggedElement(<FileField isDragging={true}/>)
    }
    else if (inputType === 'datalistfield') {
        setDraggedElement(<DataListField isDragging={true}/>)
    }
    else if (inputType === 'checkboxfield') {
        setDraggedElement(<CheckBoxField isDragging={true}/>)
    }
    console.log(`event.active.id: ${event.active.id}`);
};

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-[90vh] p-4">

            {/* Left part */}
            <div className="w-3/4 h-full">
                <Canvas canvasItems={canvasItems}/>
            </div>

            {/* Right part */}    
            <div className="w-1/4 h-full overflow-y-scroll">
                <List draggedElement={draggedElement}/>
            </div>
        </div>
    </DndContext>
  );
}

export default FormPage;
