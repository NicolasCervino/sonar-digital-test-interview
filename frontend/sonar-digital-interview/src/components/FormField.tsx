import { Box, TextField } from "@mui/material";
import { FieldError, RegisterOptions, useFormContext } from "react-hook-form";

interface FormFieldProps {
    name: string;
    label: string;
    type?: string;
    inputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    validation: RegisterOptions;
}

function FormField({ name, label, type = 'text', inputMode, validation }: FormFieldProps) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name] as FieldError | undefined;

    return (
        <Box my={2}>
            <TextField
                label={label}
                type={type}
                inputMode={inputMode}
                {...register(name, validation)}
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error ? error.message : ''}
            />
        </Box>
    );
}

export default FormField;