/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function EditDialog({canvasItems, fieldInfo, open, setOpen, setFieldInfo, editing, hoveredIndex}) {

    const [index, setIndex] = useState(null);

    useEffect(()=>{
        setIndex(hoveredIndex);
        console.log(hoveredIndex)
    }, [])

    const handleFieldUpdate = (e) => {
        e.preventDefault();
        if (editing) {
            const items = canvasItems;
            items[index] = fieldInfo;
        }
        else{
            const items = canvasItems;
            items[items.length-1] = fieldInfo;
        }
        setOpen(false);
        
    }

    const handleFieldChange = (e) => {
        const field = e.target.id;
        let value = e.target.value;
        if (field === "options") {
            let val = e.target.value.split(",");
            value = val;
        }
        setFieldInfo({...fieldInfo, [field]:value});
    }

    const fieldAttributeMap = {
        name: "Name",
        label: "Label",
        required: "Required",
        placeholder: "Placeholder",
        minLen: "Minimum Length",
        maxLen: "Maximum Length",
        minVal: "Minimum Value",
        maxVal: "Maxiumum Value",
        maxSize: "Maximum Size",
        options: "Options",
        content: "Content"
    };

  return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit field</DialogTitle>
                        <DialogDescription>
                            Edit the attributes of the field here.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleFieldUpdate}>
                        <div className="grid gap-4 py-4">
                            {
                                !editing ? (
                                    Object.keys(canvasItems[canvasItems.length-1]).map((key, index)=>{
                                        if (key === "type" || key === "id" || key === "list") {
                                            return null;
                                        } else {
                                            return (
                                                <div className="grid grid-cols-4 items-center gap-4" key={index}>
                                                    <Label htmlFor={key} className="text-right">
                                                        {fieldAttributeMap[key]}
                                                    </Label>
                                                    <Input
                                                        id={key}
                                                        defaultValue={canvasItems[canvasItems.length - 1][key]}
                                                        className="col-span-3"
                                                        onChange={handleFieldChange}
                                                    />
                                                </div>
                                            );
                                        }
                                    })
                                ) : 
                                (
                                    Object.keys(fieldInfo).map((key, index)=>{
                                        if (key === "type" || key === "id" || key === "list") {
                                            return null;
                                        } else {
                                            return (
                                                <div className="grid grid-cols-4 items-center gap-4" key={index}>
                                                    <Label htmlFor={key} className="text-right">
                                                        {fieldAttributeMap[key]}
                                                    </Label>
                                                    <Input
                                                        id={key}
                                                        defaultValue={fieldInfo[key]}
                                                        className="col-span-3"
                                                        onChange={handleFieldChange}
                                                    />
                                                </div>
                                            );
                                        }
                                    })
                                )
                            }
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
    )
}
