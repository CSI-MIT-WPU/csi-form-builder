import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function NumberField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `numberfield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <Label>Number</Label>
        <Input type="number" name="number" placeholder='12345'/>
    </div>
  )
}
