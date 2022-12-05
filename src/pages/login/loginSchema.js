import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Um email e obrigatorio.'),
    password: yup.string().required('A senha é obrigatoria.')
})