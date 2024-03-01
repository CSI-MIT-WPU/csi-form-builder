import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function RadioField() {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `radiofield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes}>
        <label>Radio Button Field</label>
        <div>
            <input type="radio"  name="txtBox" className='mr-1'/>
            <label>Option</label>
        </div>
    </div>
  )
}
