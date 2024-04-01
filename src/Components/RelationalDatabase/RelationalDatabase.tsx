import React, { useState } from 'react'
import Form from '@rjsf/mui';
import schema from './schema';
import validator from "@rjsf/validator-ajv6";
import { Box } from '@mui/material';
import { Description } from '../Description/Description';
import { CustomPasswordInput } from '../CustomPasswordField/CustomPasswordField';

const RelationalDatabase = () => {
    const [formData, setFormData] = React.useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    // const handleInputClick = () => {
    //     setIsDescriptionOpen(!isDescriptionOpen);
    // };

    // const handleCloseClick = () => {
    //     setIsDescriptionOpen(!isDescriptionOpen);
    // };
    // function transformErrors(errors: any) {
    //     return errors.map((error: any) => {
    //         if (error.name === "pattern" && error.property === ".AuthenticationMechanism.accessKey") {
    //             error.message = "Please enter a valid Access key that starts with either 'ASIA,' 'AKIA,' 'AROA,' or 'AIDA,' followed by one or more uppercase letters or numbers";
    //         }
    //         if (error.name === "pattern" && error.property === ".AuthenticationMechanism.secretKey") {
    //             error.message = "Please enter a valid Secret key which includes alphanumeric values, + and /";
    //         }
    //         if (error.name === "pattern" && error.property === ".bucketConfiguration.bucketName") {
    //             error.message = "Please enter a valid Bucket name which includes lowercase letters, numbers, and dashes except uppercase letters and special characters";
    //         }
    //         return error;
    //     });
    // }


    return (
        <Box sx={{ p: 4 }} onClick={(e: any) => {
            // handleInputClick()
        }}>
            <Form
                schema={schema}
                validator={validator}
                // transformErrors={transformErrors}
                liveValidate
                onChange={e => setFormData(e.formData)}
                showErrorList={false}
            // onClick={(e:any) => console.log(e)}
            // formData={formData}
            // onSubmit={}
            />
        </Box>
    )
}

export default RelationalDatabase