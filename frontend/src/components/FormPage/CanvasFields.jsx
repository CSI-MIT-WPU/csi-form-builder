
// THIS FILE CONTAINS ALL THE FIELDS FROM THE CANVAS ON THE LEFT HAND SIDE OF THE BUILD PAGE. 

/* eslint-disable react/prop-types */

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator"
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
        <Input type={element.type} name={element.name} id={element.id} placeholder={element.placeholder} />  
    )
}

function CanvasTextAreaField({element}){
    return (
        <Textarea name={element.name} id={element.id} cols="30" rows="8"/>
    )
}

function CanvasSelectField({element}){
    return (
        <Select name={element.name}>
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
    console.log(element.name);
    return (
        <>
            <RadioGroup>
                {
                    element.options.map((option, index)=>(
                        <div className="flex items-center space-x-2" key={index}>
                            <RadioGroupItem name={element.name} value={`${option}-${index}`} id={`${option}-${index}`}/>
                            <Label htmlFor={`${option}-${index}`}>{option}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </>
    )
}

function CanvasNumberField({element}){
    return (
        <Input type="number" name={element.name} id={element.id} placeholder={element.placeholder}/>
    )
}

function CanvasFileField({element}){
    return (
        <Input type="file" name={element.name} id={element.id} />
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
                    <CommandInput placeholder="Search..." name={element.name}/>
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
                        <Checkbox id={`opt-${index}`} className="mb-1" name={element.name}/>
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

function CanvasH1Field({element}) {
    return (
        <>
            {
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {element.content}
                </h1>
            }
        </>
    )
}

function CanvasH2Field({element}) {
    return (
        <>
            {
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    {element.content}
                </h2>
            }
        </>
    )
}

function CanvasParagraphField({element}) {
    return (
        <>
            {
                <p className="leading-7">
                    {element.content}
                </p>
            }
        </>
    )
}

function CanvasSeparatorField({element}) {
    return (
        <>
            {
                <Separator name={element.name}/>
            }
        </>
    )
}

export { CanvasTextField, CanvasTextAreaField, CanvasSelectField, CanvasRadioField, CanvasNumberField, CanvasFileField, CanvasDataListField, CanvasCheckBoxField, CanvasH1Field, CanvasH2Field, CanvasParagraphField, CanvasSeparatorField };