import React from 'react';

const GeneralData = () => {
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [gender, setGender] = React.useState('');

    return (
        <div className="ui segment">
            <form class="ui form">
  <h4 class="ui dividing header">Información General</h4>
  <div class="field">
    <label>Nombre completo</label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="nombre" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div class="field">
        <input type="text" name="apellido" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
      </div>
    </div>
  </div>
  <div class="inline fields">
    <label for="gender">Genero: </label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" value="M" checked={gender === 'M'? true : false} onChange={(e) => setGender('M')} tabIndex="0" />
        <label>Masculino</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" value="F" checked={gender === 'F'? true : false} onChange={(e) => setGender('F')} tabIndex="1" />
        <label>Femenino</label>
      </div>
    </div>
  </div>
    <div class="field">
        <label>Fecha de nacimiento</label>
        <div class="ui calendar" id="standard_calendar">
            <div class="ui input left icon">
                <i class="calendar icon"></i>
                <input type="text" placeholder="Date/Time"/>
            </div>
        </div>
    </div>
    <div class="field">
    <label>Escolaridad</label>
      <div class="field">
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
  <div class="field">
    <label>Oficio</label>
      <div class="field">
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
  <div class="field">
    <label>Hospedaje</label>
      <div class="field">
      <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
      </div>
  </div>
  <div class="field">
    <label>Religión</label>
      <div class="field">
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
  <div class="field">
    <label>País -> Estado -> Municipio</label>
      <div class="three fields">
          <div class="field">
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
          <div class="field">
          <select>
            <option value="0">Jalisco</option>
            <option value="1">Otro</option>
        </select>
          </div>
          <div class="field">
          <select>
            <option value="0">Guadalajara</option>
            <option value="1">Otro</option>
        </select>
          </div>
      </div>
  </div>
  <div class="field">
        <label>Teléfono</label>
        <div class="field" >
            <div class="ui input left icon">
                <i class="phone icon"></i>
                <input type="text" placeholder="Teléfono"/>
            </div>
        </div>
    </div>
    <div class="field">
        <label>Dirección</label>
        <div class="field" >
            <input type="text" placeholder="Dirección"/>
        </div>
    </div>
    <div class="field">
        <label>Enfermedades</label>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Diabetes</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Hipertensión</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>VIH-sida</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Asma</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Epilepsia</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Heridas</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Gripe</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Malestar estomacal</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Enfermedad psíquica</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Otra</label>
        </div>
        <div class="ui checkbox" >
            <input type="checkbox" tabindex="0"/>
            <label>Ninguna</label>
        </div>
    </div>
  </form>
        </div>
    );
}

export default GeneralData;