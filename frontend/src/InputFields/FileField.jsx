import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

export default function FileField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `filefield-${uuidv4()}`,
    });

  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? {cursor:'grabbing' } : {  }}>
        <Label>File</Label>
        <Input type="file" name="file"/>
    </div>
  )
}
