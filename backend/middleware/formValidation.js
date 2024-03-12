const validateForm = (req, res, next) => {

    const possibleFields = {
        "text": true,
        "textarea": true,
        "tel": true,
        "select": true,
        "radio": true,
        "number": true,
        "file": true,
        "email": true,
        "datalist": true,
        "checkbox": true,
        "h1": true,
        "h2": true,
        "paragraph": true,
        "separator": true
    }

    const {form_title, team, input_fields} = req.body;

    //handles empty form title 
    if (form_title.length <= 0) { 
        return res.status(400).json({message: "Bad request"});
    }

    //handles empty team name 
    if (team.length <= 0) { 
        return res.status(400).json({message: "Bad request"});
    }

    for (let i = 0; i < input_fields.length; i++) {
        const field = input_fields[i];
        if (!(field.type in possibleFields)) {
            return res.status(400).json({message: `Bad request (field type issue) `}); 
        }
        for (const attr in field) {
            //handles empty form field
            if (!field[attr]) {
                return res.status(400).json({message: `${attr} not provided`});            
            }
            //checks if the type of minimum length/maximum length is integer or not
            if ((attr === "minLen" || attr === "maxLen" || attr === "minVal" || attr === "maxVal") && typeof field[attr] !== "number") {
                return res.status(400).json({message: `Bad request`}); 
            }
            //checks if required field is boolean or not 
            if (attr === "required" && typeof field[attr] !== "boolean") {
                return res.status(400).json({message: `The 'Required' field must be true or false only.`}); 
            }
        }
    }
    next();
}

module.exports = validateForm;