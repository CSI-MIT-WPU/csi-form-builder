
// THIS FILE CONTAINS ALL THE FIELDS FROM THE CANVAS ON THE LEFT HAND SIDE OF THE BUILD PAGE. 

/* eslint-disable react/prop-types */

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Command, 
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function CanvasTextField({element}){
    return (
        <Input type={element.inputType} name={element._name} id={element.id} placeholder={element.placeholder} />  
    )
}

function CanvasTextAreaField({element}){
    return (
        <Textarea name={element._name} id={element.id} cols="30" rows="8"/>
    )
}

function CanvasSelectField({element}){
    return (
        <Select>
            <SelectTrigger className="w-[100%]">
                <SelectValue placeholder={"Select one of these..."} />
            </SelectTrigger>
            <SelectContent>
                {
                    element.options.map((option, index)=>(
                        <SelectItem value={option} key={index}>{option}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

function CanvasRadioField({element}){
    return (
        <>
            <RadioGroup defaultValue="comfortable">
                {
                    element.options.map((option, index)=>(
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem value={`${option}-${index}`} id={`${option}-${index}`} />
                            <Label htmlFor={`${option}-${index}`}>{`Option-${index+1}`}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </>
    )
}

function CanvasNumberField({element}){
    return (
        <Input type="number" name={element._name} id={element.id} placeholder={element.placeholder}/>
    )
}

function CanvasFileField({element}){
    return (
        <Input type="file" name={element._name} id={element.id} />
    )
}

function CanvasDataListField({element}){
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100%] justify-between"
                >
                    {value
                    ? element.options.find((option) => option === value)
                    : "Select..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No results found</CommandEmpty>
                    <CommandGroup>
                    {element.options.map((option, index) => (
                        <CommandItem
                            key={index}
                            value={option}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                        >
                            <Check
                                className={cn(
                                "mr-2 h-4 w-4",
                                value === option ? "opacity-100" : "opacity-0"
                                )}
                            />
                            {option}
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
      </Popover>
    )
}

function CanvasCheckBoxField({element}) {
    return (
        <>
            {
                element.options.map((option, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                        <Checkbox id={`opt-${index}`} className="mb-1"/>
                        <label
                            htmlFor={`opt-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {option}
                        </label>
                    </div>
                ))
            }
        </>
    )
}

export { CanvasTextField, CanvasTextAreaField, CanvasSelectField, CanvasRadioField, CanvasNumberField, CanvasFileField, CanvasDataListField, CanvasCheckBoxField };