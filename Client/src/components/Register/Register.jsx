import React, { useEffect, useState } from 'react';
import styleRegister from './Register.module.css';
import validation from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/action';
import { Link, useNavigate } from 'react-router-dom';


export default function Register(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({})
    const [formValid, setFormValid] = useState(false);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const errorState = useSelector(state => state.errors);
    const navigate = useNavigate();

    const openModal = () => { setIsModalOpen(true) };
    const closeModal = () => {
        setIsModalOpen(false)
        if(errorState === "Usuario creado con exito"){
            navigate('/');
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    };
    const handleSubmit =  async event => {
        let auxErrors = [];
        event.preventDefault();
        auxErrors = Object.entries(errors);
        if(auxErrors.length === 0){
            setFormValid(true)
            dispatch(addUser(userData));
            openModal();
        }
    }

    useEffect(() => {
        let auxErrors = [];
        auxErrors = Object.entries(errors);
        console.log(auxErrors);
        if(auxErrors.length === 0){
            setFormValid(true);
        } else{
            setFormValid(false);
        }
    },[errors])

    useEffect(() => {
        if(!userData.email || !userData.password){
            setFormValid(false);
        }
    }, []);
    useEffect(() => {
        setMessage(errorState)
    }, [errorState]);

    return(
        <div className={styleRegister.divPrincipal}>
            <div className={styleRegister.divForm}>
                <h1>Registro</h1>
                <form className={styleRegister.formRegister} onSubmit={handleSubmit}>
                    <div className={styleRegister.divLabelInput}>
                        <label className={styleRegister.labelForm} htmlFor="">Email</label>
                        <input className={styleRegister.inputForm} onChange={handleChange} value={userData.email} name='email' type="text" placeholder='escriba email aquí'/>
                    </div>
                    <p className={styleRegister.pError}>{errors.email ? errors.email : null}</p>
                    <div className={styleRegister.divLabelInput}>
                        <label className={styleRegister.labelForm} htmlFor="">Password</label>
                        <input className={styleRegister.inputForm} onChange={handleChange} value={userData.password} name='password' type="password" placeholder='escriba password aquí' />
                    </div>
                    <p className={styleRegister.pError}>{errors.password ? errors.password : null}</p>
                    <button type='submit' className={styleRegister.button} disabled={!formValid}>Registrarse</button>
                </form>
                <div className={styleRegister.divRegister}>
                    <h3>¿Ya tienes cuenta?</h3>
                    <Link className={styleRegister.messageLink} to={'/'}>Sign in</Link>
                </div>
            </div>
                {
                    isModalOpen && (
                        <div className={styleRegister.divModal}>

                            <div className={styleRegister.divMessage}>
                                <h1>{message}</h1>
                            <button onClick={closeModal} className={styleRegister.button} >Cerrar</button>
                            </div>
                        </div>
                )}
        </div>
    )

}