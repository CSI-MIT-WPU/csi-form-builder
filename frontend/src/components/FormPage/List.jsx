/* eslint-disable react/prop-types */
import { DragOverlay } from "@dnd-kit/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    TextField,
    TextAreaField,
    TelField,
    SelectField,
    RadioField,
    NumberField,
    FileField,
    EmailField,
    DataListField,
    CheckBoxField,
    H1Field,
    H2Field,
    ParagraphField,
    SeparatorField,
} from "@/components/FormPage/ListFields";

export default function List(props) {
    return (
        <div className="flex h-full flex-col">
            <div className="mb-6 text-center text-3xl font-light">
                Draggable Fields
            </div>
            <Tabs defaultValue="Input" className="w-[100%]">
                <TabsList className="w-[100%]">
                    <TabsTrigger value="Input">Input</TabsTrigger>
                    <TabsTrigger value="Decoration">Decoration</TabsTrigger>
                </TabsList>
                <TabsContent value="Input">
                    <div className="grid-rows-5 justify-items-center gap-y-4 md:grid md:grid-cols-2">
                        <TextField />
                        <EmailField />
                        <NumberField />
                        <TelField />
                        <TextAreaField />
                        <SelectField />
                        <DataListField />
                        <RadioField />
                        <CheckBoxField />
                        <FileField />
                        <DragOverlay>{props.draggedElement}</DragOverlay>
                    </div>
                </TabsContent>
                <TabsContent value="Decoration">
                    <div className="grid-rows-5 justify-items-center gap-y-4 md:grid md:grid-cols-2">
                        <H1Field />
                        <H2Field />
                        <ParagraphField />
                        <SeparatorField />
                        <DragOverlay>{props.draggedElement}</DragOverlay>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}