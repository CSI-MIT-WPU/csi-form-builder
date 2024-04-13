/* eslint-disable react/prop-types */
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { useDroppable } from "@dnd-kit/core";

import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

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
import EditDialog from "@/components/FormPage/EditDialog";

export default function Canvas(props) {
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