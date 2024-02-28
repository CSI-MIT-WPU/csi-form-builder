import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/components/ui/card";

function List() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="mb-4">
                <Droppable droppableId="list">
                    {(provided) => (
                        <ul className="flex flex-col gap-2 justify-center" {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable draggableId="TextField" index={0}>
                            {(provided) => (
                                <li ref={provided.innerRef} {...provided.draggableProps}>
                                    <div className="mt-2" {...provided.dragHandleProps}>Text Box</div>
                                    <input type="text" placeholder=" " className="mt-2 mx- border-2 border-gray-400 h-12 w-[95%]"/>
                                </li>
                            )}
                            </Draggable>
                            {provided.placeholder}
                        </ul>                        
                    )}
                </Droppable>
            </div>
        </div>
    );
}

function Canvas(props){
    return (
        <Card className="h-full border border-gray-400 p-2 m-2">        
            <Droppable droppableId="canvas" direction="vertical">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="h-full">
                        {props.canvasItems.map((field, index) => (
                            <Draggable key={index} draggableId={field.id} index={index}>
                            {(provided) => (
                                <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                >
                                    <div className="m-3">Text Box</div>
                                    <input type={field.type} placeholder="  Enter text here" className="ml-3 border-2 border-gray-400 h-12 w-[97%]"/>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Card>
    )
}

function FormPage() {
  const inputOptions = ["Textbox", "Textarea", "Checkbox", "Paragraph", "Dropdown", "Radio Button"];
  const decorationOptions = ["H1 Tag", "H2 Tag", "H3 Tag", "H4 Tag", "H5 Tag", "H6 Tag"];

  // Function to handle drag and drop reorder
  const onDragEnd = (result) => {
    console.log(result);
    setCanvasItems([...canvasItems, {type:"text", id:"1"}])
  };

  const [canvasItems, setCanvasItems] = useState([]);

  return (
<   DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-center items-center h-screen">

            {/* Left part */}
            <div className="w-3/4 h-full mr-4 ml-3">
                <Canvas canvasItems={canvasItems}/>
            </div>

            {/* Right part */}    
            <div className="w-1/4 h-full">
                <List/>
            </div>

        </div>
    </DragDropContext>
  );
}

export default FormPage;
