import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function TextAreaField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `textareafield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} className='flex flex-col' style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }} >
        <label>Textarea</label>
        <textarea name="txtArea" cols="30" rows="10" className='border-2 rounded border-gray-400 p-1' style={{resize:"none"}}></textarea>
    </div>
  )
}
