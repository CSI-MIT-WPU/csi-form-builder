import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `radiofield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <Label>Radio Button</Label>
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="opt-1" id="r1" />
                <Label htmlFor="r1">Option-1</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="opt-2" id="r2" />
                <Label htmlFor="r2">Option-2</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="opt-3" id="r3" />
                <Label htmlFor="r3">Option-3</Label>
            </div>
        </RadioGroup>
    </div>
  )
}
