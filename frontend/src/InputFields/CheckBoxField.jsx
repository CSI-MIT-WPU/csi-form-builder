import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';

export default function CheckBoxField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `checkboxfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? {cursor:'grabbing' } : {  }}>
        <Label>Checkbox</Label>
        <div className="flex items-center space-x-2">
            <Checkbox id="opt-1" />
            <label
                htmlFor="opt-1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Option-1
            </label>
        </div>
        <div className="flex items-center space-x-2 mt-1">
            <Checkbox id="opt-2" />
            <label
                htmlFor="opt-2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Option-2
            </label>
        </div>
    </div>
  )
}
