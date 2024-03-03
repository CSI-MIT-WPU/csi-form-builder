import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function EmailField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `emailfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }}>
        <label>Email </label>
        <input type="text" className='border-2 rounded border-gray-400 w-[100%] h-10 p-1' name="emailbox" placeholder='coolemail@gmail.com'/>
    </div>
  )
}
