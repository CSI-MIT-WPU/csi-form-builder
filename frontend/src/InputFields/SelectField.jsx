import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function SelectField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `selectfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }}>
        <div className='flex flex-col'>
            <label>Select</label>
            <select name="select" className='border-2 rounded border-gray-400 h-10 p-1'>
                <option value="opt1">Option-1</option>
                <option value="opt2">Option-2</option>
                <option value="opt3">Option-3</option>
            </select>
        </div>
    </div>
  )
}
