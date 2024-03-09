/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
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
} from "@/FormPage/ListFields";

import { 
    CanvasTextField,  
    CanvasCheckBoxField, 
    CanvasDataListField, 
    CanvasFileField, 
    CanvasNumberField,
    CanvasRadioField, 
    CanvasSelectField,
    CanvasTextAreaField 
} from "@/FormPage/CanvasFields";

  import { MdEdit } from "react-icons/md";
  import { FaTrash } from "react-icons/fa";
import EditDialog from "@/FormPage/EditDialog";

function List(props) {
    return (
        <div className="flex flex-col h-full">
            <div className="font-light text-3xl text-center mb-6">Input Fields</div>
            <div className="md:grid md:grid-cols-2 grid-rows-5 justify-items-center gap-y-4">
                <TextField />
                <EmailField />
                <NumberField />
                <TelField />
                <TextAreaField />
                <SelectField />
                <DataListField />
                <RadioField />
                <CheckBoxField />
                <FileField />
                <DragOverlay>
                    {props.draggedElement}
                </DragOverlay>
            </div>
        </div>
    );
}

function Canvas(props){

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [fieldInfo, setFieldInfo] = useState(null);

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

    function handleEdit(){
        setFieldInfo(props.canvasItems[hoveredIndex]);
        setOpen(true);
        console.log(hoveredIndex)
    }

    const {setNodeRef} = useDroppable({
        id: 'canvas',
    });
    return (
        <Card className="h-full border border-gray-400 p-4" ref={setNodeRef}>        
            {props.canvasItems.map((item, index) => (
                <div key={index} className="flex flex-col w-[100%] mb-2" onMouseOver={()=>setHoveredIndex(index)} onMouseOut={()=>setHoveredIndex(null)}>
                    <div>
                        <div className="flex items-center justify-between mb-1" >
                            <Label>{item.label}</Label>
                            <div className="flex gap-4">
                                {
                                    hoveredIndex === index ? (
                                        <>
                                            <MdEdit onClick={handleEdit}/>
                                            <FaTrash/>
                                        </>
                                    ) : 
                                    null
                                }
                            </div>
                        </div>
                        { renderElement(item) }
                    </div>
                </div>
            ))}
            {
                open ? 
                    <EditDialog 
                        canvasItems={props.canvasItems}
                        fieldInfo={fieldInfo} 
                        open={open} 
                        setOpen={setOpen} 
                        setFieldInfo={setFieldInfo}
                        editing={true}
                        hoveredIndex={hoveredIndex}
                    /> 
                : null
            }
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
    console.log(canvasItems)
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex justify-center gap-4 items-center h-screen p-4">
            {
                canvasItems.length > 0 ? (
                    <EditDialog 
                        canvasItems={canvasItems} 
                        fieldInfo={fieldInfo} 
                        open={open} 
                        setOpen={setOpen} 
                        setFieldInfo={setFieldInfo}
                        editing={false}
                    />
                ) : (
                    null
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
            <div className="w-1/4 h-full">
                <List draggedElement={draggedElement}/>
            </div>
        </div>
    </DndContext>
  );
}

export default FormPage;
