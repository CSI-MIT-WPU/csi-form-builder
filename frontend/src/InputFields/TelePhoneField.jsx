import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function TelField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `telfield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <Label>Telephone</Label>
        <Input type="tel" name="telephone" placeholder='9921162409'/>
    </div>
  )
}
