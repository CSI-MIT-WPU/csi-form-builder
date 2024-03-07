/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import {DndContext, useDroppable, DragOverlay} from '@dnd-kit/core';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { 
    TextField,
    TextAreaField,
    TelField,
    SelectField,
    RadioField,
    NumberField,
    FileField,
    EmailField,
    DataListField,
    CheckBoxField 
} from "@/InputFields/ListFields";

import { 
    CanvasTextField,  
    CanvasCheckBoxField, 
    CanvasDataListField, 
    CanvasFileField, 
    CanvasNumberField,
    CanvasRadioField, 
    CanvasSelectField,
    CanvasTextAreaField 
} from "@/InputFields/CanvasFields";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

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
            return <CanvasTextField element={element}/>
        }
        else if (element.inputType === "textarea") {
            return <CanvasTextAreaField element={element}/>
        }
        else if (element.inputType === "select") {
            return <CanvasSelectField element={element}/>
        }
        else if (element.inputType === "radio") {
            return <CanvasRadioField element={element}/>
        }
        else if (element.inputType === "number") {
            return <CanvasNumberField element={element}/>
        }
        else if (element.inputType === "file") {
            return <CanvasFileField element={element}/>
        }
        else if (element.inputType === "datalist") {
            return <CanvasDataListField element={element}/>
        }
        else if (element.inputType === "checkbox") {
            return <CanvasCheckBoxField element={element}/>
        }
    }

    const {setNodeRef} = useDroppable({
        id: 'canvas',
    });
    return (
        <Card className="h-full border border-gray-400 p-4" ref={setNodeRef}>        
            {props.canvasItems.map((item, index) => (
                <div key={index} className="flex flex-col w-[100%] mb-2">
                    <div>
                        <Label>{item.label}</Label>
                        { renderElement(item) }
                    </div>
                </div>
            ))}
        </Card>
    )
}

function FormPage() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [open, setOpen] = useState(false);
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


        //ADD MODAL LOGIC

        setOpen(true);

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

  const publishForm =  async (e) => {
    // const url = "http://127.0.0.1:3000/forms";
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         form_title: "form from frontend",
    //         team: "samit", 
    //         input_fields: canvasItems
    //     })
    // })
    console.log(canvasItems);
  }

  const fieldAttributeMap = {
    _name: "Name",
    label: "Label",
    required: "Required",
    placeholder: "Placeholder",
    minLen: "Minimum Length",
    maxLen: "Maximum Length",
    minVal: "Minimum Value",
    maxVal: "Maxiumum Value",
    maxSize: "Maximum Size",
    options: "Options"
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">
            {
                canvasItems.length > 0 ? (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                {
                                    Object.keys(canvasItems[canvasItems.length-1]).map((key, index)=>{
                                        console.log(`${key}: ${canvasItems[canvasItems.length-1][key]}`);
                                        if (key === "inputType" || key === "id" || key === "list") {
                                            return null;
                                        } else {
                                            return (
                                                <div className="grid grid-cols-4 items-center gap-4" key={index}>
                                                    <Label htmlFor={key} className="text-right">
                                                        {fieldAttributeMap[key]}
                                                    </Label>
                                                    <Input
                                                        id={key}
                                                        defaultValue={canvasItems[canvasItems.length - 1][key]}
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            );
                                        }
                                    })
                                }
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                ) : (
                    <div></div>
                )
            }

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
