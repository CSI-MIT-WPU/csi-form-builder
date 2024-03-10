function setElementData(type){
    let element = {}
    if (type === "TextField") {
        element = {
            id:`${type}-${Date.now()}`,                                          
            name:`${type}-${Date.now()}`,                                       
            minLen: 5,
            maxLen: 12,
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
            minLen: 50,
            maxLen: 120,
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
            minVal: 0,
            maxVal: 99,
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
    return element;
}

export {setElementData}