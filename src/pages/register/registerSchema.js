import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('O nome é Obrigatório').min(3, 'O nome precisa de Pelo menos 3 caracteres'),
    email: yup.string().required('O e-mail é obrigatório').email('O e-mail digitado é invalido'),
    password: yup.string().required('A senha é obrigatoria').min(6, 'A senha deve ter no minimo 6 caracteres'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'As Senhas não conferem'),
    bio: yup.string().required('nos conte sobre Você').min(10, 'Sua Descrição deve ter no minimo 10 caracteres'),
    course_module: yup.string().required('Voce deve Selecionar um modulo'),
    contact: yup.string().required('Você deve inserir um contato').min(6, 'Minimo 6 caracteres')
})