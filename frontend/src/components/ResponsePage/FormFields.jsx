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
            <Input {...props.field} />
        </FormControl>
    )
}

function TextArea(props) {
    return (
        <FormControl>
            <Textarea
                {...props.field}
            />
        </FormControl>
    )
}

function SelectField(props) {
    return (
        <Select onValueChange={props.field.onChange} defaultValue={props.field.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {
                    props.field.options.map((option, index) => {
                        return (
                            <SelectItem value={option} key={index}>{option}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}

function DataListField(props) {
    const languages = [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Spanish", value: "es" },
        { label: "Portuguese", value: "pt" },
        { label: "Russian", value: "ru" },
        { label: "Japanese", value: "ja" },
        { label: "Korean", value: "ko" },
        { label: "Chinese", value: "zh" },
    ];
    return (
        //     <Popover>
        //     <PopoverTrigger asChild>
        //       <FormControl>
        //         <Button
        //           variant="outline"
        //           role="combobox"
        //           className={cn(
        //             "w-full justify-between",
        //             !props.field.value && "text-muted-foreground"
        //           )}
        //         >
        //           {props.field.value
        //             ? languages.find(
        //                 (language) => language.value === props.field.value
        //               )?.label
        //             : "Select language"}
        //           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        //         </Button>
        //       </FormControl>
        //     </PopoverTrigger>
        //     <PopoverContent className="w-[200px] p-0">
        //       <Command>
        //         <CommandInput placeholder="Search language..." />
        //         <CommandEmpty>No language found.</CommandEmpty>
        //         <CommandGroup>
        //           {languages.map((language) => (
        //             <CommandItem
        //               value={language.label}
        //               key={language.value}
        //               onSelect={() => {
        //                 props.form.setValue("language", language.value)
        //               }}
        //             >
        //               <Check
        //                 className={cn(
        //                   "mr-2 h-4 w-4",
        //                   language.value === props.field.value
        //                     ? "opacity-100"
        //                     : "opacity-0"
        //                 )}
        //               />
        //               {language.label}
        //             </CommandItem>
        //           ))}
        //         </CommandGroup>
        //       </Command>
        //     </PopoverContent>
        //   </Popover>
        <p className="text-lg font-bold">WORK IN PROGRESS</p>
    )
}

function RadioField(props) {
    return (
        <FormControl>
            <RadioGroup
                onValueChange={props.field.onChange}
                defaultValue={props.field.value}
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
    const items = [
        {
            id: "recents",
            label: "Recents",
        },
        {
            id: "home",
            label: "Home",
        },
        {
            id: "applications",
            label: "Applications",
        },
        {
            id: "desktop",
            label: "Desktop",
        },
        {
            id: "downloads",
            label: "Downloads",
        },
        {
            id: "documents",
            label: "Documents",
        },
    ]
    return (

        <div>
            {
                props.field.options.map((option, index) => (
                    <FormField
                        key={index}
                        control={props.form.control}
                        name={props.field.name}
                        render={({ field }) => {
                            return (
                                <FormItem
                                    key={index}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                    <FormControl>
                                        <Checkbox
                                            onCheckedChange={(checked) => {
                                                return checked
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {option}
                                    </FormLabel>
                                </FormItem>
                            )
                        }}
                    />
                ))
            }
        </div>
    )
}

export { SimpleInput, TextArea, SelectField, DataListField, RadioField, CheckBoxField };