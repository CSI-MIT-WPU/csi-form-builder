/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


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
        if (element.inputType === "text" || element.inputType === "tel" || element.inputType === "email") {
            return <Input type={element.inputType} name={element._name} id={element.id} placeholder={element.placeholder} />
        }
        else if (element.inputType === "textarea") {
            return <Textarea name={element._name} id={element.id} cols="30" rows="8"/>
        }
        else if (element.inputType === "select") {
            return (
                <Select>
                    <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder={"Select one of these..."} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            element.options.map((option, index)=>(
                                <SelectItem value={option} key={index}>{option}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            )
        }
        else if (element.inputType === "radio") {
            return (
                <>
                    <RadioGroup defaultValue="comfortable">
                        {
                            element.options.map((option, index)=>(
                                <div className="flex items-center space-x-2" key={index}>
                                    <RadioGroupItem value={`${option}-${index}`} id={`${option}-${index}`} />
                                    <Label htmlFor={`${option}-${index}`}>{`Option-${index+1}`}</Label>
                                </div>
                            ))
                        }
                    </RadioGroup>
                </>
            )
        }
        else if (element.inputType === "number") {
            return <Input type="number" name={element._name} id={element.id} placeholder={element.placeholder}/>
        }
        else if (element.inputType === "file") {
            return <Input type="file" name={element._name} id={element.id} />
        }
        else if (element.inputType === "datalist") {
            return (
                <div>
                    <input list={element.list} className="border-2 border-gray-400 w-[100%] h-8 p-2"/>
                    <datalist id={element.list}>
                        {
                            element.options.map((option, index) => (
                                <option key={index} value={option}/>
                            ))
                        }
                    </datalist>
                </div>
            )
        }
        else if (element.inputType === "checkbox") {
            return (
                <>
                    {
                        element.options.map((option, index) => (
                            <div className="flex items-center space-x-2" key={index}>
                                <Checkbox id={`opt-${index}`} className="mb-1"/>
                                <label
                                    htmlFor={`opt-${index}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {option}
                                </label>
                            </div>
                        ))
                    }
                </>
            )
        }
    }

    const {setNodeRef} = useDroppable({
        id: 'canvas',
      });
    return (
        <Card className="h-full border border-gray-400 p-4" ref={setNodeRef}>        
            {props.canvasItems.map((item, index) => (
                <div key={index} className="flex flex-col w-[100%]">
                    <Label>{item.label}</Label>
                    { renderElement(item) }
                </div>
            ))}
        </Card>
    )
}

function FormPage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);

  function setElementData(inputType){
    console.log(`inside set element data: ${inputType}`)
    let element = {}
    if (inputType === "TextField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,                                       
            minLen: 5,
            maxLen: 12,
            label:inputType,                                                                      
            placeholder:"Placeholder",
            required: false,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "TextAreaField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,                                       
            minLen: 50,
            maxLen: 120,
            label:inputType,                                                                      
            placeholder:"Placeholder",
            required: false,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "TelField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,                                       
            label:inputType,                                                                      
            placeholder:"9921162409",
            required: false,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "SelectField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,  
            label:inputType,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "RadioField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,
            label:inputType,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "NumberField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,
            label:inputType,
            required: false,
            minVal: 0,
            maxVal: 99,
            placeholder: "10",
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "FileField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,
            label:inputType,
            required: false,
            maxSize: 300,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "EmailField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,
            label:inputType,
            required: false,
            placeholder: "abc@gmail.com",
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    else if (inputType === "DataListField") {
        element = {
            id:`${inputType}-${Date.now()}`,
            _name:`${inputType}-${Date.now()}`,
            options: ["abc", "def", "xyz"],
            label:inputType,
            required: false,
            list:`list${Date.now()}`,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase(),
        }
    }
    else if (inputType === "CheckBoxField") {
        element = {
            id:`${inputType}-${Date.now()}`,                                          
            _name:`${inputType}-${Date.now()}`,
            options: ["Option-A", "Option-B", "Option-C"],
            label:inputType,
            required: false,
            inputType:inputType.slice(0, inputType.indexOf("Field")).toLowerCase()
        }
    }
    return element;
  }

  function handleDragEnd({over}){
    const inputType = draggedElement.type.name;
    console.log(`type of input: ${inputType}`)
    if (over && over.id === "canvas") {
        setCanvasItems([...canvasItems, setElementData(inputType)]);
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

  const publishForm = (e) => {
    console.log(canvasItems);
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">

            {/* Left part */}
            <div className="w-3/4 h-full flex flex-col gap-2">
                <Canvas canvasItems={canvasItems}/>
                <Button onClick={publishForm}>Publish Form</Button>
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
