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
import { CheckBoxField, DataListField, H1Field, H2Field, ParagraphField, RadioField, SelectField, SeparatorField, SimpleInput, TextArea } from '@/components/ResponsePage/FormFields';

export default function ResponsePage() {

  const [formName, setFormName] = useState("Test form");
  const [inputFields, setInputFields] = useState([]);
  const { id } = useParams();
  const form = useForm();

  useEffect(() => {
    const getData = async () => {
      const url = `http://127.0.0.1:3000/forms/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const formData = data["form"];
      setFormName(formData["form_title"]);
      setInputFields(formData["input_fields"]);
      console.log(formData["input_fields"])
    }
    getData();
  }, []);

  const onSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
  }

  const renderFormField = (type, field, form, field_f) => {
    //field   = DOM field
    //field_f = used for handling events like onChange
    //field_f is important for form submission and field is important for displaying things like placeholders etc.
    if (type === "textfield" || type === "email" || type === "telephone" || type === "number" || type === "file") {
      return <SimpleInput field={field} field_f={field_f} form={form} />
    }
    else if (type === "textarea") {
      return <TextArea field={field} field_f={field_f} />
    }
    else if (type === "select") {
      return <SelectField field={field} field_f={field_f} form={form} />
    }
    else if (type === "datalist") {
      return <DataListField field={field} field_f={field_f} form={form} />
    }
    else if (type === "radio") {
      return <RadioField field={field} field_f={field_f} />
    }
    else if (type === "checkbox") {
      return <CheckBoxField field={field} field_f={field_f} form={form} />
    }
    else if (type === "h1") {
      return <H1Field field={field} />
    }
    else if (type === "h2") {
      return <H2Field field={field} />
    }
    else if (type === "paragraph") {
      return <ParagraphField field={field}/>
    }
    else if (type === "separator") {
      return <SeparatorField field={field}/>
    }
  }

  return (
    <div className='w-full p-4'>
      <h2 className="scroll-m-20 border-b p-6 text-3xl font-semibold tracking-tight first:mt-0 text-center">{formName}</h2>
      <Card className="min-h-[50vh] border border-gray-400 p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            {inputFields.map((inputField, index) => {
              inputField["id"] = index;
              if (inputField.type === "h1" || inputField.type === "h2" || inputField.type === "p" || inputField.type === "separator") {
                return renderFormField(inputField.type, inputField);
              }
              else {
                return (
                  <FormField
                    key={index}
                    control={form.control}
                    name={inputField.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md">{inputField.label}</FormLabel>
                        {renderFormField(inputField.type, inputField, form, field)}
                      </FormItem>
                    )}
                    
                  />
                )
              }
            })}
            <Button className="w-full" type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}