import React, { useState } from 'react'
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { createMuiTheme } from '@mui/material';


const Test = () => {
  // const customizedTheme:any = createMuiTheme({
  //   jsonforms: { input: { delete: { background: '#f44336' }}}
  // });
  // const schema = person.schema;
  // const uischema = person.uischema;
  const initialData = person.data;
  const [data, setData] = useState(initialData);

  const schema = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 3,
        "description": "Please enter your name",
        "options": {
          "slider": true
        }
      },
      "vegetarian": {
        "type": "boolean"
      },
      "birthDate": {
        "type": "string",
        "format": "date"
      },
      "nationality": {
        "type": "string",
        "enum": [
          "DE",
          "IT",
          "JP",
          "US",
          "RU",
          "Other"
        ]
      },
      "personalData": {
        "type": "object",
        "properties": {
          "age": {
            "type": "integer",
            "description": "Please enter your age."
          },
          "height": {
            "type": "number"
          },
          "drivingSkill": {
            "type": "number",
            "maximum": 10,
            "minimum": 1,
            "default": 7
          }
        },
        "required": [
          "age",
          "height"
        ]
      },
      "occupation": {
        "type": "string"
      },
      "postalCode": {
        "type": "string",
        "maxLength": 5
      }
    },
    "required": [
      "occupation",
      "nationality"
    ]
  }
  // console.log(uischema)
  const uischema = {
    "type": "VerticalLayout",
    "elements": [
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/name",
            "options": {
              format: 'password'
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/personalData/properties/age"
          },
          {
            "type": "Control",
            "scope": "#/properties/birthDate"
          }
        ]
      },
      {
        "type": "Label",
        "text": "Additional Information"
      },
      {
        "type": "HorizontalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/personalData/properties/height"
          },
          {
            "type": "Control",
            "scope": "#/properties/nationality"
          },
          {
            "type": "Control",
            "scope": "#/properties/occupation",
            "suggestion": [
              "Accountant",
              "Engineer",
              "Freelancer",
              "Journalism",
              "Physician",
              "Student",
              "Teacher",
              "Other"
            ]
          }
        ]
      }
    ]
  }
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default Test