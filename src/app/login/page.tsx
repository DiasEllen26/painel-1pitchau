"use client"

import { SyntheticEvent, useCallback, useRef } from 'react';
import styles from './style.module.css';

function Login() {
    
    const refForm = useRef<any>();

    const submitForm = useCallback((e: SyntheticEvent) => {
        e.preventDefault();

    }, [])

    return (
        <>
            <div className={styles.main}>
                <div className={styles.border}>
                    <div className="d-flex flex-colum align-items-center">
                        <h1 className='text-primary text-center text-2xl '>Login</h1>
                        <p className='text-info m-5'>Preencha os campos para logar no sistema!</p>
                    </div>
                    <hr />

                    {/* Formulário  */}
                    <form className='needs-validation align-items-center p-5' noValidate onSubmit={submitForm} ref={refForm}>
                        {/* E-mail */}
                        <div className='col-md-12 mt-1'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" className='form-control' placeholder='Email' id='email' required/>
                            
                            </label>

                            <span className="label-text-alt">Por favor, insira seu email</span>

                        </div>

                        {/* Senha */}
                        <div className='col-md-12 mt-1'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className='form-control' placeholder='Senha' id='email' required/>
                            
                            </label>

                            <span className="label-text-alt">Por favor, digite sua senha</span>

                        </div>

                        <button className="btn btn-outline btn-success p-3 m-3 flex justify-center " type='submit' id='botao'>Enviar</button>

                    </form>
                
                </div>
            </div>
        </>
    )
}

export default Login;