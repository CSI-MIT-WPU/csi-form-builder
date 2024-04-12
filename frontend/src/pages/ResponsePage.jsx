//ResponsePage.jsx

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner"
import { 
  CheckBoxField, 
  DataListField, 
  H1Field, 
  H2Field, 
  ParagraphField, 
  RadioField, 
  SelectField, 
  SeparatorField, 
  SimpleInput, 
  TextArea 
} from '@/components/ResponsePage/FormFields';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

export default function ResponsePage() {

  const [formName, setFormName] = useState();
  const [inputFields, setInputFields] = useState([]);
  const [typeNameMap, setTypeNameMap] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const form = useForm();

  const mapTypeToName = (input_fields) => {
    input_fields.forEach(input_field => {
      const name = input_field.name;
      const type = input_field.type;
      setTypeNameMap((prevState) => ({
        ...prevState,
        [name]: type,
      }));
    });
  }

  useEffect(() => {
    const getData = async () => {
      const url = `http://127.0.0.1:3000/forms/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const formData = data["form"];
      setFormName(formData["form_title"]);
      setInputFields(formData["input_fields"]);
      mapTypeToName(formData["input_fields"])
      console.log(formData["input_fields"])
    }
    getData();
  }, []);

  const onSubmit = async (values) => {
    const content = Object.keys(values).map((key) => ({
      [key]: values[key],
      type: typeNameMap[key],
    }));
    try {
      const data = {
        user_email: values["user_email"],
        form_id: id,
        content: content.map(item => JSON.stringify(item))
      };
      console.log(data)
      const response = await fetch("http://127.0.0.1:3000/responses/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        navigate("/success");
      }
    } catch (error) {
      toast("There was an error!", {
        description: `${error.message}`,
      })
    }
    console.log(content)
    console.log(typeNameMap)
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
      return <ParagraphField field={field} />
    }
    else if (type === "separator") {
      return <SeparatorField field={field} />
    }
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-1/2'>
        <h2 className='scroll-m-20 border-b p-6 text-3xl font-semibold tracking-tight first:mt-0 text-center'>{formName}</h2>
        <Card className='min-h-[50vh] border border-gray-400 p-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
              <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                Enter Email
              </h2>
              <FormField
                control={form.control}
                name='user_email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>Enter Email</FormLabel>
                    <Input {...field} type='email' value={field.value ?? ''} required />
                  </FormItem>
                )}
              />
              <SeparatorField />
            {inputFields.map((inputField, index) => {
              inputField["id"] = index;
              if (inputField.type === "h1" || inputField.type === "h2" || inputField.type === "paragraph" || inputField.type === "separator") {
                return (
                  <div key={index}>
                    {
                      renderFormField(inputField.type, inputField)
                    }
                  </div>
                )
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
    </div>
  )
}