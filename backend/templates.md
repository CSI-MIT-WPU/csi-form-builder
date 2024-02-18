# <div align="center">This file will contain body templates for different API routes</div>



Route: <span style="color: yellow;">POST</span> http://127.0.0.1:3000/build ( used to make a new form )

```json
{
  "form_title": "Form with all fields",
  "team": "Tech",
  "fields": [
    {
      "name": "First Name",
      "type": "textfield",
      "minLen": 5,
      "maxLen": 10,
      "label": "Enter first name",
      "placeholder": "Ben",
      "required": true
    },
      {
      "name": "Last Name",
      "type": "textfield",
      "minLen": 5,
      "maxLen": 10,
      "label": "Enter Last name",
      "placeholder": "Mover",
      "required": true
    },
    {
      "name": "Address",
      "type": "textarea",
      "minLen": 5,
      "maxLen": 100,
      "label": "Enter address",
      "placeholder": "Ben",
      "required": true
    },
    {
      "name": "Phone Number",
      "type": "telephone",
      "label": "Enter phone",
      "placeholder": "9821302771",
      "required": true
    },
    {      
      "name": "Department",
      "type": "select",
      "options": ["CSE", "Mech", "ENTC", "Civil", "Chem"],
      "label": "Enter department",
      "required": true
    },
    {      
      "name": "Year",
      "type": "radio",
      "options": ["FY", "SY", "TY"],
      "label": "Enter year",
      "required": true
    },
    {      
      "name": "Number of guests",
      "type": "number",
      "minVal": 2,
      "maxVal":3,
      "label": "Enter number of guests",
      "placeholder": "2",
      "required": true
    },
    {
      "name": "Profile Picture",
      "type": "file",
      "maxSize":300,
      "label": "Enter Profile Picture",
      "required": false
    },
    {
      "name": "Email",
      "type": "email",
      "label": "Enter Profile Picture",
      "placeholder": "yo@gmail.com",
      "required": true
    },
    {      
      "name": "Hobby",
      "type": "datalist",
      "options": ["Chess", "Videogames", "Hiking"],
      "label": "Enter Hobby",
      "required": false
    },
    {
      "name":"Vehicle1",
      "type":"checkbox",
      "value": "Car",
      "label": "Enter vehicle",
      "required": false
    },
    {
      "name":"Vehicle2",
      "type":"checkbox",
      "value": "Bike",
      "label": "Enter vehicle",
      "required": false
    }
  ]
}
```

Route: <span style="color: yellow;">POST</span> http://127.0.0.1:3000/forms/submit ( used to make a new response )

```json
{
  "user_email":"hello@gmail.com",
  "form_id":"b28f0ae2-f3ce-4550-99b0-6a8d15c35907",
  "content":[
    {
      "type":"textfield",
      "First Name": "Samit"
    },
    {
      "type":"textfield",
      "Last Name": "Tungare"
    },
    {
      "type":"textarea",
      "Address":"abc sinhagad road pune"
    },
    {
      "type":"telephone",
      "Phone Number": 1234567890
    },
    {
      "type":"select",
      "Department":"CSE"
    },
    {
      "type":"radio",
      "Year":"FY"
    },
    {
      "type":"number",
      "Number of guests":2
    },
    {
      "type":"file",
      "Profile Picture": ""
    },
    {
      "type":"email",
      "Email": "tungaresamit@gmail.com"
    },
    {
      "type":"datalist",
      "Hobby":"Chess"
    },
    {
      "type":"checkbox",
      "Vehicle1":"Car"
    },
    {
      "type":"checkbox",
      "Vehicle2":"Bike"
    }
  ]
}
```