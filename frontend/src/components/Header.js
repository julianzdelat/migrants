import React from 'react';

const Header = () => {
    return (
        <div className="ui four buttons">
            <button className="ui button">Inicio</button>
            <button className="ui active button">Entrevista</button>
            <button className="ui button">Estadísticas</button>
            <button className="ui button">Administración</button>
        </div>
    );
}

export default Header;