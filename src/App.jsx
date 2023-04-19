import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box} from '@mui/material';

const validationSchema = Yup.object({
    name: Yup.string().required('Ім\'я є обов\'язковим'),
    email: Yup.string()
        .email('Введіть дійсну електронну пошту')
        .required('Електронна пошта є обов\'язковою'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Телефон повинен містити тільки цифри')
        .min(12, 'Телефон повинен містити 12 цифр')
        .max(12, 'Телефон повинен містити 12 цифр')
        .required('Телефон є обов\'язковим'),
});

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" alignItems="center" gap="5px"    >
            <TextField
                id="name"
                name="name"
                label="Ім'я"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                id="email"
                name="email"
                label="Електронна пошта"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id="phone"
                name="phone"
                label="Телефон"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
            />
            <Button type="submit" variant="contained" color="primary">
                Відправити
            </Button>
            </Box>
        </form>
    );
};

export default MyForm;