import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';

export default function SelectField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `selectfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <div>
            <Label>Select</Label>
            <Select>
            <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Select something!" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="opt1">Option-1</SelectItem>
                <SelectItem value="opt2">Option-2</SelectItem>
                <SelectItem value="opt3">Option-3</SelectItem>
            </SelectContent>
            </Select>
        </div>
    </div>
  )
}
