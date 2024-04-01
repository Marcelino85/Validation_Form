import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidationSchema } from "../../validation/useValidation"

import './style.css'
export const Form = () => {
    
    const{register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: yupResolver(useValidationSchema)
    })
    
    const onSubmit = data =>{
     console.log(data)
    }

  return (
    <>
        <div className="formContainer">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="fullname">Nome Completo</label>
                <input 
                    id="fullname" 
                    name="fullname"
                    type="text" 
                    className="form-control"
                    {...register('fullname')}
                />
                <div>{errors.fullname?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    name="username"
                    type="text" 
                    className="form-control"
                    {...register('username')}
                />
                <div>{errors.username?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    name="email"
                    type="text" 
                    className="form-control"
                    {...register('email')}
                />
                <div>{errors.email?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input 
                    id="password" 
                    name="password"
                    type="password" 
                    className="form-control"
                    {...register('password')}
                />
                <div>{errors.password?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input 
                    id="confirmPassword" 
                    name="confirmPassword"
                    type="password" 
                    className="form-control"
                    {...register('confirmPassword')}
                />
                <div>{errors.confirmPassword?.message}</div>
            </div>
            
            <div className="checkbox-group">
               
                <input 
                    id="acceptTerms" 
                    name="acceptTerms"
                    type="checkbox" 
                    className="form-checkbox"
                    {...register('acceptTerms')}
                />
                <div>{errors.accepterms?.message}</div>
                <label htmlFor="acceptTerms">eu li e aceito os termos</label>
            </div>

            <div className="button-group">
                    <button type="submit"className="submit-button">Registrar</button>
                    <button type="submit"className="submit-button"onClick={() => reset()} >Resetar</button>

            </div>

        </form>

    </div>
    </>
  )
}

export default Form;


