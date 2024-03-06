
// THIS FILE CONTAINS ALL THE COMPONENTS FROM THE LIST ON THE RIGHT HAND SIDE OF THE BUILD PAGE. 

/* eslint-disable react/prop-types */

import {useDraggable} from '@dnd-kit/core';
import { v4 as uuidv4 } from 'uuid';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {ChevronsUpDown } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


function TextField(props) {
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

function TextAreaField(props) {
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

function TelField(props) {
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


function SelectField(props) {
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

function RadioField(props) {
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

function NumberField(props) {
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

function FileField(props) {
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

function EmailField(props) {
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

function DataListField(props) {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: `datalistfield-${uuidv4()}`,
    });
  return (
    <div ref={setNodeRef}  {...listeners} {...attributes} style={props.isDragging ? { cursor:'grabbing' } : {  }}>
        <div>
            <Label>Datalist</Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100%] justify-between"
                    >
                        Select Something!
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                    <CommandInput placeholder="Search something..." />
                    <CommandGroup>
                    </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    </div>
  )
}

function CheckBoxField(props) {
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

export { TextField, TextAreaField, TelField, SelectField, RadioField, NumberField, FileField, EmailField, DataListField, CheckBoxField };