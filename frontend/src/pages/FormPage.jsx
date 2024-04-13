/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DndContext, useDroppable, DragOverlay } from "@dnd-kit/core";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import EditDialog from "@/components/FormPage/EditDialog";
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
  CheckBoxField,
  H1Field,
  H2Field,
  ParagraphField,
  SeparatorField,
} from "@/components/FormPage/ListFields";
import {
  CanvasTextField,
  CanvasCheckBoxField,
  CanvasDataListField,
  CanvasFileField,
  CanvasNumberField,
  CanvasRadioField,
  CanvasSelectField,
  CanvasTextAreaField,
  CanvasH1Field,
  CanvasH2Field,
  CanvasParagraphField,
  CanvasSeparatorField,
} from "@/components/FormPage/CanvasFields";

import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import { setElementData } from "@/utilityFunctions";

function List(props) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 text-center text-3xl font-light">
        Draggable Fields
      </div>
      <Tabs defaultValue="Input" className="w-[100%]">
        <TabsList className="w-[100%]">
          <TabsTrigger value="Input">Input</TabsTrigger>
          <TabsTrigger value="Decoration">Decoration</TabsTrigger>
        </TabsList>
        <TabsContent value="Input">
          <div className="grid-rows-5 justify-items-center gap-y-4 md:grid md:grid-cols-2">
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
            <DragOverlay>{props.draggedElement}</DragOverlay>
          </div>
        </TabsContent>
        <TabsContent value="Decoration">
          <div className="grid-rows-5 justify-items-center gap-y-4 md:grid md:grid-cols-2">
            <H1Field />
            <H2Field />
            <ParagraphField />
            <SeparatorField />
            <DragOverlay>{props.draggedElement}</DragOverlay>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Canvas(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [fieldInfo, setFieldInfo] = useState(null);

  function renderElement(element) {
    const elementMap = {
      text: <CanvasTextField element={element} />,
      tel: <CanvasTextField element={element} />,
      email: <CanvasTextField element={element} />,
      textarea: <CanvasTextAreaField element={element} />,
      select: <CanvasSelectField element={element} />,
      radio: <CanvasRadioField element={element} />,
      number: <CanvasNumberField element={element} />,
      file: <CanvasFileField element={element} />,
      datalist: <CanvasDataListField element={element} />,
      checkbox: <CanvasCheckBoxField element={element} />,
      h1: <CanvasH1Field element={element} />,
      h2: <CanvasH2Field element={element} />,
      paragraph: <CanvasParagraphField element={element} />,
      separator: <CanvasSeparatorField element={element} />,
    };
    return elementMap[element.type];
  }

  function handleEdit() {
    setFieldInfo(props.canvasItems[hoveredIndex]);
    setOpen(true);
  }

  function handleDelete() {
    props.deleteCanvasItems(hoveredIndex);
  }

  const { setNodeRef } = useDroppable({
    id: "canvas",
  });
  return (
    <Card className="h-full border border-gray-400 p-4" ref={setNodeRef}>
      {props.canvasItems.map((item, index) => (
        <div
          key={index}
          className="mb-2 flex w-[100%] flex-col"
          onMouseOver={() => setHoveredIndex(index)}
          onMouseOut={() => setHoveredIndex(null)}
        >
          <div>
            <div className="mb-1 flex items-center justify-between">
              <Label>{item.label}</Label>
              <div className="flex gap-4">
                {hoveredIndex === index ? (
                  <>
                    <MdEdit onClick={handleEdit} />
                    <FaTrash onClick={handleDelete} />
                  </>
                ) : null}
              </div>
            </div>
            {renderElement(item)}
          </div>
        </div>
      ))}
      {open ? (
        <EditDialog
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          fieldInfo={fieldInfo}
          open={open}
          setOpen={setOpen}
          setFieldInfo={setFieldInfo}
          editing={true}
          hoveredIndex={hoveredIndex}
        />
      ) : null}
    </Card>
  );
}

function FormPage() {
  const [open, setOpen] = useState(false);
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [fieldInfo, setFieldInfo] = useState(null);
  const [formName, setFormName] = useState("");
  const [team, setTeam] = useState("");

  const navigate = useNavigate();

  function handleDragEnd({ over }) {
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
    const fieldMap = {
      textfield: <TextField isDragging={true} />,
      emailfield: <EmailField isDragging={true} />,
      radiofield: <RadioField isDragging={true} />,
      textareafield: <TextAreaField isDragging={true} />,
      numberfield: <NumberField isDragging={true} />,
      telfield: <TelField isDragging={true} />,
      selectfield: <SelectField isDragging={true} />,
      filefield: <FileField isDragging={true} />,
      datalistfield: <DataListField isDragging={true} />,
      checkboxfield: <CheckBoxField isDragging={true} />,
      h1field: <H1Field isDragging={true} />,
      h2field: <H2Field isDragging={true} />,
      pfield: <ParagraphField isDragging={true} />,
      separatorfield: <SeparatorField isDragging={true} />,
    };
    setDraggedElement(fieldMap[type]);
  };

  function deleteCanvasItems(index) {
    const newCanvasItems = [...canvasItems];
    newCanvasItems.splice(index, 1);
    setCanvasItems(newCanvasItems);
  }

  const postForm = async(formStatus) => {
    const url = "http://127.0.0.1:3000/forms";
    try {
      console.log(canvasItems)
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_title: formName,
          team: team,
          status: formStatus,
          input_fields: canvasItems
        })
      });
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message); 
      }
      navigate("/");
    } catch (error) {
        toast("There was an error!", {
          description: `${error.message}`,
        })
    }
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-screen items-center justify-center gap-4 p-4">
        {canvasItems.length > 0 ? (
          <EditDialog
            canvasItems={canvasItems}
            setCanvasItems={setCanvasItems}
            fieldInfo={fieldInfo}
            open={open}
            setOpen={setOpen}
            setFieldInfo={setFieldInfo}
            editing={false}
          />
        ) : null}

        {/* Left part */}
        <div className="h-full w-3/4 gap-2">
          <div className="flex items-center w-full pb-2">
            <div className="flex gap-2 w-[100%]">
              <div className="w-[40%]">
                <Label>Enter form name</Label>
                <Input
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Epic form"
                  className="border-gray-300"
                />
              </div>
              <div className="w-[40%]">
                <Label>Enter team name</Label>
                <Input
                  onChange={(e) => setTeam(e.target.value)}
                  placeholder="Epic team"
                  className="border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-2 self-end">
              <Button onClick={()=>postForm("publish")} className="rounded-3xl">Publish</Button>
              <Button onClick={()=>postForm("draft")} className="rounded-3xl" >Draft</Button>
            </div>
          </div>
          <Canvas
            canvasItems={canvasItems}
            setCanvasItems={setCanvasItems}
            deleteCanvasItems={deleteCanvasItems}
          />
        </div>

        {/* Right part */}
        <div className="h-full w-1/4">
          <List draggedElement={draggedElement} />
        </div>
      </div>
    </DndContext>
  );
}

export default FormPage;
