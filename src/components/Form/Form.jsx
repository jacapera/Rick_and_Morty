import React, { useState } from 'react';
import styleForm from './Form.module.css';
import validation from './validation';


export default function Form(props) {

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = React.useState({})

  const handleChange = event => {
    const {name, value} = event.target;
    setUserData({
      ...userData,
      [name]: value
    })
    //console.log(userData);
    setErrors(validation({
      ...userData,
      [name]: value
    }))
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
  }

  return(
    <div className={styleForm.divFondo}>
      <div className={styleForm.divPrincipal}>
        <div className={styleForm.imgTitulo}></div>
        <div className={styleForm.divImg}></div>
        <form className={styleForm.form} onSubmit={handleSubmit}>
          <div className={styleForm.divLabelInput}>
            <label className={styleForm.labelForm}>Email:  </label>
            <input className={styleForm.inputForm} type="text" name="email" value={userData.email} onChange={handleChange}/>
          </div>
          <p className={styleForm.pError}>{errors.email ? errors.email : null}</p>
          <div className={styleForm.divLabelInput}>
            <label className={styleForm.labelForm}>Pasword:</label>
            <input className={styleForm.inputForm} type="password" name='password' value={userData.password} onChange={handleChange}/>
          </div>
          <p className={styleForm.pError}>{errors.password ? errors.password : null}</p>
          <hr style={{backgroundColor:'aqua', margin:'7px', width:'100%', height:'1px'}} />
          <button className={styleForm.button} type='submit'>Entrar</button>
        </form>
      </div>
    </div>
  )

}