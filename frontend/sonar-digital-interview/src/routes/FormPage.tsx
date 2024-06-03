import { Box, Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormInputs = {
    name: string
    surname: string
    email: string
    phoneNumber: number
};

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    surname: z.string().min(1, { message: "Surname is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string()
        .min(9, { message: "Phone number must be at least 9 characters long" })
        .max(11, { message: "Phone number must be at most 11 characters long" })
        .refine(val => !isNaN(Number(val)), { message: "Phone number must be a number" })
        .transform(val => Number(val)),
});

function FormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box my={2}>
                <TextField
                    label="Name"
                    {...register('name', { required: "Name is required" })}
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                />
            </Box>

            <Box my={2}>
                <TextField
                    label="Surname"
                    {...register('surname', { required: "Surname is required" })}
                    fullWidth
                    margin="normal"
                    error={!!errors.surname}
                    helperText={errors.surname ? errors.surname.message : ''}
                />
            </Box>

            <Box my={2}>
                <TextField
                    label="Email"
                    {...register('email', { required: "Email is required" })}
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                />
            </Box>

            <Box my={2}>
                <TextField
                    label="Phone Number"
                    type="number"
                    inputMode="tel"
                    {...register('phoneNumber', { required: "Phone Number is required" })}
                    fullWidth
                    margin="normal"
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                />
            </Box>

            <Box my={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </Box>
        </form>
    );
}

export default FormPage;