/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useDraggable, DragOverlay} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function InputField({ type, label, inputType, _name }) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: uuidv4(),
        data: {label, inputType, _name}
    });
    return (
        <div ref={setNodeRef}  {...listeners} {...attributes}>
            <label>{label}</label>
            <input type={inputType} className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name={_name}/>
            <DragOverlay>
                <label>{label}</label>
                <input type={inputType} className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name={_name}/>
            </DragOverlay> 
        </div>
    )
}
