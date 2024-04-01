import React, { useEffect, useMemo, useState } from 'react'
import Form from '@rjsf/mui';
import schema from '../RelationalDatabase/schema';
// import schema from './schema';
// import uiSchema from './uiSchema.json';
import validator from "@rjsf/validator-ajv6";
import { Box, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Description } from '../Description/Description';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomPasswordInput } from '../CustomPasswordField/CustomPasswordField';

// function flattenSchema(schema: Record<string, any>, prefix = '', result: Record<string, any> = {}) {
//     for (const key in schema) {
//         const prop = schema[key];
//         const newKey = prefix ? `${prefix}.${key}` : key;
//         if (Array.isArray(prop)) {
//             flattenSchema(prop.reduce((acc, val, idx) => {
//                 acc[idx] = val;
//                 return acc;
//             }, {}), newKey, result);
//         } else if (typeof prop === 'object' && prop !== null) {
//             flattenSchema(prop, newKey, result);
//         } else {
//             result[newKey] = prop;
//         }
//     }
//     return result;
// }

const CloudStrore = () => {
    const [formData, setFormData] = React.useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [currentProperty, setCurrentProperty] = useState('');

    const [description, setDescription] = useState('');

    // Function to update description based on property
    const updateDescription = (property: any) => {
        if (property && schema?.schema?.properties[property.split("_")[1]]) {
            setDescription(schema.schema?.properties[property.split("_")[1]]?.properties[property.split("_")[2]].fieldDescription.map((item: any) => {
                return item?.description
            }));
        } else {
            setDescription('');
        }
    };

    const handleFocusChange = (property: any) => {
        setCurrentProperty(property);
        setIsDescriptionOpen(true);
    };

    const handleCloseClick = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    function getAllKeysWithCustomComponent(obj: any) {
        const keys: string[] = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    if (obj[key].hasOwnProperty('selectCustomcomponent') && obj[key]['selectCustomcomponent'] === true) {
                        keys.push(key);
                    }
                    keys.push(...getAllKeysWithCustomComponent(obj[key]));
                }
            }
        }
        return keys;
    }
    

    const keysWithCustomComponent = getAllKeysWithCustomComponent(schema);
    console.log({ keysWithCustomComponent });


    function parseSchema(schema: Record<string, any>): Record<string, any> {
        const uiSchema: Record<string, any> = {};
        for (const key in schema) {
            let property = schema[key];
            if (property.properties) {
                uiSchema[key] = parseSchema(property.properties);
            }
            else {
                uiSchema[key] = {};
                if (property.component === "password") {
                    uiSchema[key]["ui:widget"] = (props: any) => {
                        return CustomPasswordInput(props?.id, props?.label, props?.onChange, handleFocusChange);
                    };
                }
            }
        }
        return uiSchema;
    }

    const uiSchema = parseSchema(schema);
    // const uiSchema = {
    //     "conditional": {
    //         "AuthenticationMechanism": {
    //             "password": {
    //                 "ui:widget": (props: any) => {
    //                     return CustomPasswordInput(props?.id, props?.label, props?.onChange, handleFocusChange);
    //                 }
    //             }
    //         }
    //     }
    // }

    function transformErrors(errors: any) {
        return errors.map((error: any) => {
            if (error.name === "pattern" && error.property === ".AuthenticationMechanism.accessKey") {
                error.message = "Please enter a valid Access key that starts with either 'ASIA,' 'AKIA,' 'AROA,' or 'AIDA,' followed by one or more uppercase letters or numbers";
            }
            if (error.name === "pattern" && error.property === ".AuthenticationMechanism.secretKey") {
                error.message = "Please enter a valid Secret key which includes alphanumeric values, + and /";
            }
            if (error.name === "pattern" && error.property === ".bucketConfiguration.bucketName") {
                error.message = "Please enter a valid Bucket name which includes lowercase letters, numbers, and dashes except uppercase letters and special characters";
            }
            return error;
        });
    }

    useEffect(() => {
        updateDescription(currentProperty);
    }, [currentProperty]);

    const renderForm = () => {
        return (
            <Grid container sx={{ p: 4, display: "flex", justifyContent: "space-between" }}>
                <Grid item lg={isDescriptionOpen ? 8 : 12} md={isDescriptionOpen ? 8 : 12}>
                    <Form
                        schema={schema}
                        uiSchema={uiSchema}
                        validator={validator}
                        transformErrors={transformErrors}
                        // liveValidate
                        onChange={e => {
                            setFormData(e.formData)
                        }}
                        showErrorList={false}
                        onFocus={(e) => {
                            handleFocusChange(e)
                        }}
                        onSubmit={() => { console.log(formData) }}
                    />
                </Grid>
                <Grid item lg={4} md={4} pt={4}>
                    {
                        isDescriptionOpen ? <Description description={description} onClose={handleCloseClick} /> : <></>
                    }
                </Grid>
            </Grid>
        );
    };

    return (
        <>
            {renderForm()}
        </>
    )
}

export default CloudStrore