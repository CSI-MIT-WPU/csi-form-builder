import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function FileField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `filefield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }}>
        <label>File</label>
        <input type="file" className='w-[100%] h-10 p-1' name="file"/>
    </div>
  )
}
