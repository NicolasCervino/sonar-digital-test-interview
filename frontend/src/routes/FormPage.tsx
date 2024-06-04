import { Box, Button } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "../components/FormField";

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
    const methods = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <FormField
                    name="name"
                    label="Name"
                    inputMode="text"
                    validation={{ required: "Name is required" }}
                />

                <FormField
                    name="surname"
                    label="Surname"
                    inputMode="text"
                    validation={{ required: "Surname is required" }}
                />

                <FormField
                    name="email"
                    label="Email"
                    inputMode="email"
                    validation={{ required: "Email is required" }}
                />

                <FormField
                    name="phoneNumber"
                    label="Phone Number"
                    inputMode="tel"
                    validation={{ required: "Phone Number is required" }}
                />

                <Box my={2}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
}

export default FormPage;