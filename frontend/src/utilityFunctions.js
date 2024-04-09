function setElementData(type){
    let element = {}
    if (type === "TextField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            minLength: 5,
            maxLength: 12,
            label:type,                                                                      
            placeholder:"Placeholder",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "TextAreaField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            minLength: 50,
            maxLength: 120,
            label:type,                                                                      
            placeholder:"Placeholder",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "TelField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            label:type,                                                                      
            placeholder:"9921162409",
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "SelectField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,  
            label:type,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "RadioField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            options: ["Option-1", "Option-2", "Option-3"],
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "NumberField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            min: 0,
            max: 99,
            placeholder: "10",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "FileField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            maxSize: 300,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "EmailField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            label:type,
            required: false,
            placeholder: "abc@gmail.com",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "DataListField") {
        element = {
            id:`${type}-${Date.now()}`,
            name:`${type}-${Date.now()}`,
            options: ["abc", "def", "xyz"],
            label:type,
            required: false,
            list:`list${Date.now()}`,
            type:type.slice(0, type.indexOf("Field")).toLowerCase(),
        }
    }
    else if (type === "CheckBoxField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            options: ["Option-A", "Option-B", "Option-C"],
            label:type,
            required: false,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "H1Field"){
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            content: "Temporary Header",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "H2Field"){
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            content: "Temporary Header",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "ParagraphField"){
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            content: "Temporary Paragraph Text",
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    else if (type === "SeparatorField"){
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,
            type:type.slice(0, type.indexOf("Field")).toLowerCase()
        }
    }
    return element;
}

export {setElementData}