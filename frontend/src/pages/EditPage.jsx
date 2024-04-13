/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import FormPage from "./FormPage"
import { useParams } from "react-router-dom";

export default function EditPage() {

    const { id } = useParams();
    const [formName, setFormName] = useState(null);
    const [inputFields, setInputFields] = useState([]);

    useEffect(() => {
        const fetchFormFields = async () => {
            const url = `http://127.0.0.1:3000/forms/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setFormName(data.form.form_title);
            setInputFields(data.form.input_fields);
            console.log(data);
            console.log(data.form.input_fields)
        }
        fetchFormFields();
    }, []);

    return (
        <>
            <FormPage editing={true} nameOfForm={formName} inputFields={inputFields}/>
        </>
    )
}
