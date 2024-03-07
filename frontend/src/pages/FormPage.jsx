/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        if (element.type === "text" || element.type === "tel" || element.type === "email") {
            return <CanvasTextField element={element}/>
        }
        else if (element.type === "textarea") {
            return <CanvasTextAreaField element={element}/>
        }
        else if (element.type === "select") {
            return <CanvasSelectField element={element}/>
        }
        else if (element.type === "radio") {
            return <CanvasRadioField element={element}/>
        }
        else if (element.type === "number") {
            return <CanvasNumberField element={element}/>
        }
        else if (element.type === "file") {
            return <CanvasFileField element={element}/>
        }
        else if (element.type === "datalist") {
            return <CanvasDataListField element={element}/>
        }
        else if (element.type === "checkbox") {
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
  const [open, setOpen] = useState(false);
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [fieldInfo, setFieldInfo] = useState(null);
  const [formName, setFormName] = useState("");
  const [team, setTeam] = useState("");

  const navigate = useNavigate();

  function setElementData(type){
    let element = {}
    if (type === "TextField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            minLen: 5,
            maxLen: 12,
            label:type,                                                                      
            placeholder:"Placeholder",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "TextAreaField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            minLen: 50,
            maxLen: 120,
            label:type,                                                                      
            placeholder:"Placeholder",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "TelField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            label:type,                                                                      
            placeholder:"9921162409",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "SelectField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,  
            label:type,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "RadioField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "NumberField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            minVal: 0,
            maxVal: 99,
            placeholder: "10",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "FileField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            maxSize: 300,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "EmailField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            placeholder: "abc@gmail.com",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "DataListField") {
        element = {
            id:`${type}-${Date.now()}`,
            name:`${type}-${Date.now()}`,
            options: ["abc", "def", "xyz"],
            label:type,
            required: false,
            list:`list${Date.now()}`,
            type:type.slice(0, type.indexOf("Field")).toLowerCase(),
        }
    }
    else if (type === "CheckBoxField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            options: ["Option-A", "Option-B", "Option-C"],
            label:type,
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    return element;
  }

  function handleDragEnd({over}){
    const type = draggedElement.type.name;
    if (over && over.id === "canvas") {
        setOpen(true);
        const elementData = setElementData(type);
        setCanvasItems([...canvasItems, elementData]);
        setFieldInfo(elementData);
    }
  }

  const handleDragStart = (event) => {
        const type = event.active.id.split("-")[0];
        if (type === "textfield") {
            setDraggedElement(<TextField isDragging={true}/>);
        }
        else if(type === "emailfield"){
            setDraggedElement(<EmailField isDragging={true}/>)
        }
        else if (type === "radiofield") {
            setDraggedElement(<RadioField isDragging={true}/>)
        }
        else if (type === "textareafield") {
            setDraggedElement(<TextAreaField isDragging={true}/>)
        }
        else if (type === "numberfield") {
            setDraggedElement(<NumberField isDragging={true}/>)
        }
        else if (type === 'telfield') {
            setDraggedElement(<TelField isDragging={true}/>)
        }
        else if (type === 'selectfield') {
            setDraggedElement(<SelectField isDragging={true}/>)
        }
        else if (type === 'filefield') {
            setDraggedElement(<FileField isDragging={true}/>)
        }
        else if (type === 'datalistfield') {
            setDraggedElement(<DataListField isDragging={true}/>)
        }
        else if (type === 'checkboxfield') {
            setDraggedElement(<CheckBoxField isDragging={true}/>)
        }
    };

    
    const fieldAttributeMap = {
        name: "Name",
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

  const handleFieldChange = (e) => {
    const field = e.target.id;
    let value = e.target.value;
    if (field === "options") {
        let val = e.target.value.split(",");
        value = val;
    }
    setFieldInfo({...fieldInfo, [field]:value});
  }

  const handleFieldUpdate = (e) => {
    e.preventDefault();
    const items = canvasItems;
    items[items.length-1] = fieldInfo;
    setOpen(false);
  }


  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  }

  const handleTeamNameChange = (e) => {
    setTeam(e.target.value);
  }

  const publishForm =  async (e) => {
    const url = "http://127.0.0.1:3000/forms";
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            form_title: formName,
            team: team, 
            input_fields: canvasItems
        })
    })
    if (response.ok) {
        navigate("/home");
    }
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
                            <form onSubmit={handleFieldUpdate}>
                                <div className="grid gap-4 py-4">
                                    {
                                        Object.keys(canvasItems[canvasItems.length-1]).map((key, index)=>{
                                            if (key === "type" || key === "id" || key === "list") {
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
                                                            onChange={handleFieldChange}
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
                            </form>
                        </DialogContent>
                    </Dialog>
                ) : (
                    <div></div>
                )
            }

            {/* Left part */}
            <div className="w-3/4 h-full flex flex-col gap-2">
                <Canvas canvasItems={canvasItems}/>
                <Label>Enter form name</Label>
                <Input onChange={handleFormNameChange} placeholder="Epic form"/>
                <Label>Enter team name</Label>
                <Input onChange={handleTeamNameChange} placeholder="Epic team"/>
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
