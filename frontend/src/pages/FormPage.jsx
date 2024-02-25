import React from "react";
//import { Card } from "@shadcn/ui";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function FormPage() {
  const inputOptions = ["Textbox", "Textarea", "Checkbox", "Paragraph", "Dropdown", "Radio Button"];
  const decorationOptions = ["H1 Tag", "H2 Tag", "H3 Tag", "H4 Tag", "H5 Tag", "H6 Tag"];
  // Function to handle drag and drop reorder
  const onDragEnd = (result) => {
    // logic to handle drag and drop
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left part */}
      <div className="w-3/4 h-full mr-4 ml-3">
        <Card className="h-full border border-gray-400 p-5 m-5">        
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
                        <input type="text" placeholder="Textbox" className="m-5 p-5"/>
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
          <div className="mb-4">
          <br></br>
            <DropdownMenu title="Input">
              <DropdownMenuTrigger className="p-7 m-5 border border-gray-400">Input</DropdownMenuTrigger>
              <DropdownMenuContent>
                {
                  inputOptions.map((option, index) => {
                    return (
                      <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                    )
                  })
                }
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu title="Input">
              <DropdownMenuTrigger className="p-7 m-5 border border-gray-400">Decoration</DropdownMenuTrigger>
              <DropdownMenuContent>
                {
                  decorationOptions.map((option, index) => {
                    return (
                      <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                    )
                  })
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
