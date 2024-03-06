import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function TextAreaField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `textareafield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? {cursor:'grabbing' } : {  }} >
        <Label>Textarea</Label>
        <Textarea name="txtArea" placeholder="A text area"/>
    </div>
  )
}
