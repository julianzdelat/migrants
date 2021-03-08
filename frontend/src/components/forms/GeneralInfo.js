import React, {useState} from 'react';

const GeneralData = () => {
  const [data, setData] = useState({});

    return (
        <div className="ui segment">
            <form className="ui form">
  <h4 className="ui dividing header">Información General</h4>
  <div className="field">
    <label>Nombre completo</label>
    <div className="two fields">
      <div className="field">
        <input type="text" name="nombre" value={data.name || ''} onChange={(e) => setData({...data, name: e.target.value})}/>
      </div>
      <div className="field">
        <input type="text" name="apellido" value={data.lastname || ''} onChange={(e) => setData({...data, lastname: e.target.value})}/>
      </div>
    </div>
  </div>
  <div className="inline fields">
    <label htmlFor="gender">Genero: </label>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" value="M" checked={data.gender === 'M'? true : false} onChange={(e) => setData({...data, gender: 'M'})}/>
        <label>Masculino</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" value="F" checked={data.gender === 'F'? true : false} onChange={(e) => setData({...data, gender: 'F'})}/>
        <label>Femenino</label>
      </div>
    </div>
  </div>
    <div className="field">
        <label>Fecha de nacimiento</label>
        <div className="ui calendar" id="standard_calendar">
            <div className="ui input left icon">
                <i className="calendar icon"></i>
                <input type="text" placeholder="Date/Time"/>
            </div>
        </div>
    </div>
    <div className="field">
    <label>Escolaridad</label>
      <div className="field">
      <select>
      <option value="0">Analfabeta</option>
      <option value="1">Primaria</option>
      <option value="2">Secundaria</option>
      <option value="3">Bachillerato</option>
      <option value="4">Carrera Técnica</option>
      <option value="5">Licenciatura</option>
    </select>
      </div>
  </div>
  <div className="field">
    <label>Oficio</label>
      <div className="field">
      <select>
      <option value="0">Ama de casa</option>
      <option value="1">Artesano</option>
      <option value="2">Campesino</option>
      <option value="3">Carpintero</option>
      <option value="4">Cocinero</option>
      <option value="5">Comerciante</option>
      <option value="6">Construcción</option>
      <option value="7">Chofer</option>
      <option value="8">Estudiante</option>
      <option value="9">Electricista</option>
      <option value="10">Herrero</option>
      <option value="11">Mecánico</option>
      <option value="12">Obrero</option>
      <option value="13">Pintor</option>
      <option value="14">Plomero</option>
      <option value="15">Policía</option>
      <option value="16">Profesionista</option>
      <option value="17">Otro</option>
    </select>
      </div>
  </div>
  <div className="field">
    <label>Hospedaje</label>
      <div className="field">
      <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
      </div>
  </div>
  <div className="field">
    <label>Religión</label>
      <div className="field">
      <select>
      <option value="0">Católico</option>
      <option value="1">Evangélico</option>
      <option value="2">Creyente</option>
      <option value="3">Testigo de Jehovah</option>
      <option value="4">Mormón</option>
      <option value="5">Otra</option>
    </select>
      </div>
  </div>
  <div className="field">
    <label>País -> Estado -> Municipio</label>
      <div className="three fields">
          <div className="field">
          <select>
            <option value="0">Estados Unidos</option>
            <option value="1">México</option>
            <option value="2">Guatemala</option>
            <option value="3">Honduras</option>
            <option value="4">El Salvador</option>
            <option value="5">Nicarágua</option>
            <option value="5">Otro</option>
        </select>
          </div>
          <div className="field">
          <select>
            <option value="0">Jalisco</option>
            <option value="1">Otro</option>
        </select>
          </div>
          <div className="field">
          <select>
            <option value="0">Guadalajara</option>
            <option value="1">Otro</option>
        </select>
          </div>
      </div>
  </div>
  <div className="field">
        <label>Teléfono</label>
        <div className="field" >
            <div className="ui input left icon">
                <i className="phone icon"></i>
                <input type="text" placeholder="Teléfono"/>
            </div>
        </div>
    </div>
    <div className="field">
        <label>Dirección</label>
        <div className="field" >
            <input type="text" placeholder="Dirección"/>
        </div>
    </div>
    <div className="field">
        <label>Enfermedades</label>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Diabetes</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Hipertensión</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>VIH-sida</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Asma</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Epilepsia</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Heridas</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Gripe</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Malestar estomacal</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Enfermedad psíquica</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Otra</label>
        </div>
        <div className="ui checkbox" >
            <input type="checkbox" tabIndex="0"/>
            <label>Ninguna</label>
        </div>
    </div>
  </form>
        </div>
    );
}

export default GeneralData;