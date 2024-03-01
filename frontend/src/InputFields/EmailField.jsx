import React from 'react'
import {useDraggable, DragOverlay} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function EmailField() {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: uuidv4(),
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes}>
        <label>Email Field</label>
        <input type="text" className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name="txtBox"/>
        <DragOverlay>
            <label>Email Field</label>
            <input type="email" className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name="txtBox"/>
        </DragOverlay> 
    </div>
  )
}
