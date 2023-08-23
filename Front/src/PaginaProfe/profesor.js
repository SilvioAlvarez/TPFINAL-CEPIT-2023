import React from 'react'
import { Link } from 'react-router-dom';


const Profesor = () => {
  return (
    <div class="container mt-4 p-5">
    <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col ">
          <div class="card h-100">
          <img src="https://images4.imagebam.com/ef/e7/3b/MENRF6F_o.jpg" className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Notas de examenes</h5>
              <p class="card-text">Aqui podras ver las notas de los examenes realizados</p>
              <Link to="/Profnotas" className="btn btn-primary" id="myButton">Ver notas</Link>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
             
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src="https://images4.imagebam.com/75/42/5c/MENRF62_o.jpg" className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Boletin</h5>
              <p class="card-text">Aqui podras ver el boletin </p>
              <Link to="/Profboletin" className="btn btn-primary" id="myButton">Ver Boletin</Link>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src="https://images4.imagebam.com/08/79/bf/MENRF6G_o.jpg" className="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Materias del año en curso</h5>
              <p class="card-text">Aqui veras las meterias con sus dias y horarios</p>
              <Link to="/Profmaterias" className="btn btn-primary" id="myButton">Ver Materias</Link>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
            </div>
          </div>
        </div>

        <div class="col">
            <div class="card h-100">
            <img src="https://images4.imagebam.com/3e/e8/24/MENRF5Z_o.jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Asistencias</h5>
                <p class="card-text">Aqui veras las asistencias. </p>
                <Link to="/ProfAsistencia" className="btn btn-primary" id="myButton">Asistencias</Link>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="https://images4.imagebam.com/96/d2/c0/MENRF61_o.jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Avisos de los profes</h5>
                <p class="card-text">Aqui veras llos mensajes que envien los profesores a sus alumnos</p>
                <Link to="/Profavisos" className="btn btn-primary" id="myButton">Ver avisos</Link>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="https://images4.imagebam.com/d5/79/59/MENRF6I_o.jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Enviar mensaje</h5>
                <p class="card-text">Aqui podras enviar un mensaje directamente al profesor</p>
                <Link to="/Profmensaje" className="btn btn-primary" id="myButton">Enviar Mensaje</Link>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary" >Last updated <span id="elapsedTime"></span> mins ago</small>
              </div>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Profesor
