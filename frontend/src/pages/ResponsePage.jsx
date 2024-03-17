import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    CanvasTextField,
    CanvasCheckBoxField,
    CanvasDataListField,
    CanvasFileField,
    CanvasNumberField,
    CanvasRadioField,
    CanvasSelectField,
    CanvasTextAreaField,
    CanvasH1Field,
    CanvasH2Field,
    CanvasParagraphField,
    CanvasSeparatorField,
} from "@/components/FormPage/CanvasFields";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function ResponsePage() {

    const [formName, setFormName] = useState("Test form");
    const [inputFields, setInputFields] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        const getData = async () => {
            const url = `http://127.0.0.1:3000/forms/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            const formData = data["form"];
            setFormName(formData["form_title"]);
            setInputFields(formData["input_fields"]);
            console.log(formData["input_fields"]);
        }
        getData();
    }, []);

    function renderElement(element) {
        console.log(element.id)
        if (
          element.type === "textfield" ||
          element.type === "tel" ||
          element.type === "email"
        ) {
          return <CanvasTextField element={element} />;
        } else if (element.type === "textarea") {
          return <CanvasTextAreaField element={element} />;
        } else if (element.type === "select") {
          return <CanvasSelectField element={element} />;
        } else if (element.type === "radio") {
          return <CanvasRadioField element={element} />;
        } else if (element.type === "number") {
          return <CanvasNumberField element={element} />;
        } else if (element.type === "file") {
          return <CanvasFileField element={element} />;
        } else if (element.type === "datalist") {
          return <CanvasDataListField element={element} />;
        } else if (element.type === "checkbox") {
          return <CanvasCheckBoxField element={element} />;
        } else if (element.type === "h1") {
          return <CanvasH1Field element={element} />;
        } else if (element.type === "h2") {
          return <CanvasH2Field element={element} />;
        } else if (element.type === "paragraph") {
          return <CanvasParagraphField element={element} />;
        } else if (element.type === "separator") {
          return <CanvasSeparatorField element={element} />;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
    <div className='w-full p-4'>
        <h2 className="scroll-m-20 border-b p-6 text-3xl font-semibold tracking-tight first:mt-0 text-center">{formName}</h2>
        <Card className=" min-h-[50vh] border border-gray-400 p-4">
            <form onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) => {
                    inputField["id"] = index;
                    return(
                        <div key={index}>
                            <div className='mb-4'>
                                <Label>{inputField.label}</Label>
                                {renderElement(inputField, index)}
                            </div>
                        </div>
                    )
                })}
                <Button className="w-full" type="submit">Submit</Button>
            </form>
        </Card>
    </div>
    )
}
