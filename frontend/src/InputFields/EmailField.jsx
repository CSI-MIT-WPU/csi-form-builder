import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function EmailField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `emailfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <Label>Email </Label>
        <Input type="text" name="emailbox" placeholder='coolemail@gmail.com'/>
    </div>
  )
}
