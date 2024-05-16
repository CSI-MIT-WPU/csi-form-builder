/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DndContext } from "@dnd-kit/core";

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
import List from "@/components/FormPage/List";
import Canvas from "@/components/FormPage/Canvas";

import { setElementData } from "@/utilityFunctions";

function FormPage({ editing, nameOfForm, inputFields }) {
  const [open, setOpen] = useState(false);
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [fieldInfo, setFieldInfo] = useState(null);
  const [formName, setFormName] = useState("");
  const [team, setTeam] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    populateEditPage();
  }, [inputFields]);

  //populate edit page with form fields only if editing is true
  function populateEditPage() {
    if (editing) {
      setCanvasItems(inputFields);
    }
  }

  //handles drag end
  function handleDragEnd({ over }) {
    const type = draggedElement.type.name;
    if (over && over.id === "canvas") {
      setOpen(true);
      const elementData = setElementData(type);
      setCanvasItems([...canvasItems, elementData]);
      setFieldInfo(elementData);
    }
    console.log(canvasItems)
  }

  //handles drag start. uses map to get the correct field component
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

  //used to publish/draft form to backend
  const postForm = async (formStatus) => {
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

  //used to delete items from canvas. triggers when clicked on trash icon after hovering on a field on canvas.
  function deleteCanvasItems(index) {
    const newCanvasItems = [...canvasItems];
    newCanvasItems.splice(index, 1);
    setCanvasItems(newCanvasItems);
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
          {!editing ? (
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
                <Button onClick={() => postForm("published")} className="rounded-3xl">Publish</Button>
                <Button onClick={() => postForm("draft")} className="rounded-3xl" >Draft</Button>
              </div>
            </div>) : (
            <div className=" flex w-full items-center justify-center pb-2">
              <div className=" text-3xl" > { nameOfForm } </div>
            </div>
          )
          }
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
