import * as Yup from 'yup'
export const useValidationSchema = Yup.object().shape({
    fullname:Yup.string().required('Campo nome obrigatório'),
    username:Yup.string().required('Campo Usuário obrigatório'),
    email:Yup.string().email().required('Campo email obrigatório'),
    password:Yup.string().min(6).max(8).required('Campo senha obrigatório'),
    confirmPassword:Yup
    .string()
    .required('Campo confirmação de senha obrigatório')
    .oneOf([Yup.ref('password'), null],'Confirmação de senha não coincide'),
    acceptTerms:Yup.bool().oneOf([true],'Campo aceite termos obrigatório')
})