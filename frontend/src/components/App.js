import React from 'react';
import GeneralData from './forms/GeneralInfo';
import Header from './Header';

const App = () => {
    return (
        <div className="ui segment">
            <Header/>
            <GeneralData/>
        </div>
    );
}

export default App;