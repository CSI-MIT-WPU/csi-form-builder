import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function DataListField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `datalistfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { scale: '1.1', cursor:'grabbing' } : {  }}>
        <div className="flex flex-col ">
            <label>Datalist</label>
            <input list='list' className='border-2 border-gray-400 h-10 p-1'/>
            <datalist id='list'>
                <option value="val1"/>
                <option value="val2"/>
                <option value="val3"/>
            </datalist>
        </div>
    </div>
  )
}
