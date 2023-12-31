import React, { useState, useRef } from 'react';
import './inicioSesion.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAlumno } from '../Alumno/AlumnoContext';
import { useUsuario } from '../usuarioContext';
import { useAuth } from './tokenContext';
import { Routes, Route } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const InicioSesion = ({ onLogin }) => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { setAlumnoLogueado } = useAlumno();
  const { setUsuarioLogueado } = useUsuario();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(null);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const emailInputRef = useRef(null);


  const handlePasswordReset = async () => {
    if (formData.email.trim() === '') {
      console.log("trim password")
      emailInputRef.current.focus();
      setShowEmailWarning(true);
      setTimeout(() => {
        setShowEmailWarning(false);
      }, 2000); // 2000 milisegundos (2 segundos)
      return;
    }

    try {
      // Check if the email exists in the database
      const checkEmailResponse = await axios.get(
      `https://app-2361a359-07df-48b8-acfd-5fb4c0536ce2.cleverapps.io/usuario/email/${formData.email}`
      );
  console.log(checkEmailResponse.data)
      if (checkEmailResponse.data.email.length > 0) {


     setShowSuccessAlert({ message: 'Enviando email......' });

      const sendEmailResponse = await axios.post('https://app-2361a359-07df-48b8-acfd-5fb4c0536ce2.cleverapps.io/email/reset', {
        email: formData.email,
      });

      console.log('Solicitud POST exitosa:', sendEmailResponse.data);
      if (sendEmailResponse.data === 'Correo electrónico enviado correctamente!') {
        setShowSuccessAlert({ message: 'Email enviado exitosamente.' });
      } else {
        setErrorAlert('Error al enviar el email. No existe.');
      }

      setTimeout(() => {
        setShowSuccessAlert(null);
        setErrorAlert(null);
      }, 2000); // 2000 milisegundos (2 segundos)
    }

    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      setErrorAlert('Error al enviar el email. No existe');

      setTimeout(() => {
        setShowSuccessAlert(null);
        setErrorAlert(null);
      }, 2000); // 2000 milisegundos (2 segundos)
    }
  };








  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://app-2361a359-07df-48b8-acfd-5fb4c0536ce2.cleverapps.io/usuario/login', formData);
      const newToken = response.data.token;
      setToken(newToken);
      console.log("inicio", response.data)
      onLogin(response.data.nombre);
      setUsuarioLogueado(response.data);
      const idUsuario = response.data.id;

      if (response.data.nombre === 'Admin' && response.data.tipo === 'Profesor') {

        navigate('/admin');
      }

      else if (response.data.tipo === 'Alumno') {

        // Una vez que tengas el ID del usuario, realiza una solicitud GET para obtener el ID del alumno
        const resp = await axios.get(`https://app-2361a359-07df-48b8-acfd-5fb4c0536ce2.cleverapps.io/alumno/usuario/${idUsuario}`);
        const alumnoData = resp.data;

        if (alumnoData) {


          setAlumnoLogueado(alumnoData);
        }
        navigate('/alumno');

      } else if (response.data.tipo === 'Profesor') {
        const resp = await axios.get(`https://app-2361a359-07df-48b8-acfd-5fb4c0536ce2.cleverapps.io/profesor/usuario/${idUsuario}`);
        const profesorData = resp.data;


        if (profesorData) {

          console.log(profesorData)
          // setProfesorLogueado(profesorData);
        }
        navigate('/profesor');
      } else {
        navigate('/alumno');
      }

    } catch (error) {
      console.error('Error en el inicio de sesión:', error);

      setMessage('Error en el inicio de sesión. Verifica tus credenciales.');
      setTimeout(() => {
        setMessage(null)
      }, 2000); // 2000 milisegundos (2 segundos)
    }
  };



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };



  return (
    
    <div className="container mt-3">
    <div className="row justify-content-center align-items-center">
      <div className="col-xs-12 col-md-6 col-lg-4 p-3 bg-sesion rounded">
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        {message && <Alert variant="danger">{message}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={emailInputRef}
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-sesion w-100">
              Iniciar sesión
            </button>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-olvide w-100"
              onClick={handlePasswordReset}
            >
              ¿Olvidé mi contraseña?
            </button>
          </div>
          <Link
            to="/inscripcion-online"
            className="btn btn-registrarse w-100"
          >
            Registrarse
          </Link>
        </form>
        {showSuccessAlert && (
          <Alert variant={showSuccessAlert.variant} className="mt-3 text-center">
            {showSuccessAlert.message}
          </Alert>
        )}
        {errorAlert && (
          <Alert variant="danger" className="mt-3 text-center">
            {errorAlert}
          </Alert>
        )}
        {showEmailWarning && (
          <Alert variant="danger" className="mt-3 text-center">
            Debes ingresar tu correo electrónico.
          </Alert>
        )}
        <Routes>
          <Route path="/inicio-sesion" element={<InicioSesion />} />
        </Routes>
      </div>
    </div>
  </div>
);
};


export default InicioSesion;