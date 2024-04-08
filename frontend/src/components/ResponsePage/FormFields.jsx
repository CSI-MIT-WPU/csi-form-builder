/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "../ui/checkbox";

function SimpleInput(props) {
    return (
        <FormControl>
            <Input {...props.field} {...props.field_f} value={props.field_f.value ?? ""}/>
        </FormControl>
    )
}

function TextArea(props) {
    return (
        <FormControl>
            <Textarea {...props.field} {...props.field_f}/>
        </FormControl>
    )
}

function SelectField(props) {
    return (
        <Select onValueChange={props.field_f.onChange} defaultValue={props.field_f.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {
                    props.field.options.map((option, index) => {
                        return (
                            <SelectItem
                                value={option}
                                key={index}
                                onSelect={() => {
                                    const fieldName = props.field.name;
                                    const fieldVal = option;
                                    props.form.setValue(fieldName, fieldVal)
                                    console.log(props.field_f);
                                }}> {option}
                            </SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}

function DataListField(props) {
    return (
        <Popover>                       
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !props.field.value && "text-muted-foreground"
                        )}
                    >
                        {props.field_f.value
                            ? props.field.options.find(
                                (option) => option === props.field_f.value
                            )
                            : "Select option"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No matches found.</CommandEmpty>
                    <CommandGroup>
                        {props.field.options.map((option, index) => {
                            return (
                                <CommandItem
                                    value={option}
                                    key={index}
                                    onSelect={() => {
                                        const fieldName = props.field.name;
                                        const fieldVal = option;
                                        props.form.setValue(fieldName, fieldVal)
                                        console.log(props.field_f);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            option === props.field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {option}
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

function RadioField(props) {
    return (
        <FormControl>
            <RadioGroup
                onValueChange={props.field_f.onChange}
                defaultValue={props.field_f.value}
                className="flex flex-col space-y-1"
            >
                {
                    props.field.options.map((option, index) => {
                        return (
                            <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                                <FormControl>
                                    <RadioGroupItem value={option} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    {option}
                                </FormLabel>
                            </FormItem>
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    )
}

function CheckBoxField(props) {

    //If the checkbox array is empty then create array with field.value otherwise append the value
    function handleCheckboxChange(field, _field){
        if (!field.value) {
            field.value = [];
        }
        return field.onChange([...field.value, _field]);
    }

    return (
        <>
            {
                props.field.options.map((_field, index)=>(
                    <FormField
                      key={_field}
                      control={props.form.control}
                      name={props.field.name}
                      render={({ field }) => {
                        return (
                            <FormItem
                              key={_field}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                                <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(_field)}
                                      onCheckedChange = {(checked) => {
                                        console.log(field.value)
                                        return checked 
                                          ?
                                            handleCheckboxChange(field, _field)
                                          : field.onChange(
                                            field.value?.filter(
                                                (value) => value !== _field
                                            )
                                          )
                                      }}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    {_field}
                                </FormLabel>
                            </FormItem>
                        )
                      }}
                    />
                ))
            }
        </>
    )
}


//add decoration fields

export { SimpleInput, TextArea, SelectField, DataListField, RadioField, CheckBoxField };