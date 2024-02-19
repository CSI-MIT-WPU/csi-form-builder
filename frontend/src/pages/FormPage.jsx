import React from "react";
//import { Card } from "@shadcn/ui";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//import DropdownMenu from '@shadcn/ui/dropdown-menu';
import { Card } from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
//import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

function FormPage() {
  const inputOptions = ["Textbox", "Textarea", "Checkbox", "Radio Button"];
  const decorationOptions = ["H1 Tag", "H2 Tag", "H3 Tag", "Paragraph"];
  // Function to handle drag and drop reorder
  const onDragEnd = (result) => {
    // logic to handle drag and drop
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left part */}
      <div className="w-3/4 h-full mr-4">
        <Card className="h-full border border-gray-300 p-4">        
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="form-elements">
              {(provided) => (
                <div
                  className="h-full"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Draggable draggableId="input1" index={0}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <input type="text" placeholder="Textbox" />
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Card>
      </div>
      {/* Right part */}
      <div className="w-1/4 h-full">
        <div className="flex flex-col justify-between h-full">
          {/* Input dropdown */}
          <div className="mb-4">
            <DropdownMenu title="Input">
              {inputOptions.map((option, index) => (
                <DropdownMenu.Item key={index}>{option}</DropdownMenu.Item>
              ))}
            </DropdownMenu>
          </div>
          {/* Decoration dropdown */}
          <div>
            <DropdownMenu title="Decoration">
              {decorationOptions.map((option, index) => (
                <DropdownMenu.Item key={index}>{option}</DropdownMenu.Item>
              ))}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
