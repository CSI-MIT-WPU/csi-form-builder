/* eslint-disable no-unused-vars */
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form';
import { CheckBoxField, DataListField, RadioField, SelectField, SimpleInput, TextArea } from '@/components/ResponsePage/FormFields';

export default function ResponsePage() {

    const [formName, setFormName] = useState("Test form");
    const [inputFields, setInputFields] = useState([]);
    const { id } = useParams();
    const form = useForm();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const renderFormField = (type, field, form) => {
      if (type === "textfield" || type === "email" || type === "telephone" || type === "number" || type === "file") {
        return <SimpleInput field={field}/>
      }
      else if (type === "textarea") {
        return <TextArea field={field}/>
      }
      else if (type === "select") {
        return <SelectField field={field}/>
      }
      else if (type === "datalist") {
        return <DataListField field={field} form={form}/>
      }
      else if (type === "radio") {
        return <RadioField field={field}/>
      }
      else if (type === "checkbox") {
        return <CheckBoxField field={field} form={form}/>
      }
    }

    return (
    <div className='w-full p-4'>
        <h2 className="scroll-m-20 border-b p-6 text-3xl font-semibold tracking-tight first:mt-0 text-center">{formName}</h2>
        <Card className=" min-h-[50vh] border border-gray-400 p-4">
            <Form {...form}>
              <form onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) => {
                  inputField["id"] = index;
                  return(
                    <FormField
                      key={index}
                      control={form.control}
                      name={inputField.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-md">{inputField.label}</FormLabel>
                            {renderFormField(inputField.type, inputField, form)}
                        </FormItem>
                      )}
                    />
                    )
                  })}
                <Button className="w-full" type="submit">Submit</Button>
              </form>
            </Form>
        </Card>
    </div>
    )
}