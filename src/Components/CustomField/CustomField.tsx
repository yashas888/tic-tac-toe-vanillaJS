// const Form = JSONSchemaForm.default;
import Form from "@rjsf/core";
import React from "react";
import validator from "@rjsf/validator-ajv6";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const CustomField = () => {
    const schema: any = {
        type: "string"
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    console.log({ showPassword })

    const uiSchema = {
        "ui:widget": (props: any) => {
            return (
                <>
                    {showPassword === true ? <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={'text'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl> : <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>}
                </>
            );
        }
    };

    return (
        <div>
            {/* <Form
                widgets={widgets}
                schema={schema}
                uiSchema={uiSchema}
                liveValidate
            /> */}
            <Form
                schema={schema}
                uiSchema={uiSchema}
                liveValidate
                validator={validator}
            />
        </div>
    )
}
