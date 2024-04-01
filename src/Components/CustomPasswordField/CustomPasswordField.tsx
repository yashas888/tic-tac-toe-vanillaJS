import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

export const CustomPasswordInput = (id: any, label: any, onChange: any, handleFocusChange: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <FormControl required id={id} sx={{ width: "full" }} onFocus={(e) => handleFocusChange(e.target.id)} variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} edge="end">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
                onChange={(event) => onChange(event.target.value)}
            />
        </FormControl>
    );
};

export const flattenSchema = (schema: any, prefix = '') => {
    const flattenedSchema: any = {};

    for (const key in schema) {
        const property = schema[key];
        const currentPath = prefix ? `${prefix}.${key}` : key;

        if (property.type === 'object' && property.properties) {
            Object.assign(flattenedSchema, flattenSchema(property.properties, currentPath));
        } else if (property.$ref) {
            // If the property is a reference, resolve it
            const refPath = property.$ref.replace('#/', '');
            Object.assign(flattenedSchema, flattenSchema(schema[refPath], currentPath));
        } else {
            // Add the property to the flattened schema
            flattenedSchema[currentPath] = property;
        }
    }
    return flattenedSchema;
}

export function getKeyByValue(obj: any, targetValue: any) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === targetValue)) {
            keys.push(key);
        }
    }
    return keys.length ? keys : null; // If the value is not found, return null
}