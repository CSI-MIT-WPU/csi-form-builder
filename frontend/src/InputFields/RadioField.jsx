import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function RadioField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `radiofield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }}>
        <label>Radio Button</label>
        <div>
            <input type="radio"  name="opt-1" className='mr-1'/>
            <label>Option-1</label>
        </div>
        <div>
            <input type="radio"  name="opt-2" className='mr-1'/>
            <label>Option-2</label>
        </div>
        <div>
            <input type="radio"  name="opt-3" className='mr-1'/>
            <label>Option-3</label>
        </div>
    </div>
  )
}
