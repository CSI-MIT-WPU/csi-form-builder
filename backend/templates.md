# <div align="center">This file will contain body templates for different API routes</div>



Route: <span style="color: yellow;">POST</span> http://127.0.0.1:3000/build ( used to make a new form )

```json
{
  "form_title": "Test Form",
  "team": "Technical",
  "fields": [
    {
      "name": "First Name",
      "type": "textfield",
      "minLen": 5,
      "maxLen": 12,
      "label": "Enter first name",
      "placeholder": "Ben",
      "required": true
    }
  ]
}
```

Route: <span style="color: yellow;">POST</span> http://127.0.0.1:3000/forms/submit ( used to make a new response )

```json
{
  "user_email":"idk@gmail.com",
  "form_id": "e9ef5a74-16b1-4c5b-b5f6-d97c1170dc95",
  "content": 
      {
        "First Name": "Samit",
        "Last Name": "Tungare"
      }
}
```