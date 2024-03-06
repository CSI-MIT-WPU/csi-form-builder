import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';

export default function TextField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `textfield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <Label>Textbox</Label>
        <Input type="text" name="txtBox" placeholder='some text'/>
    </div>
  )
}
