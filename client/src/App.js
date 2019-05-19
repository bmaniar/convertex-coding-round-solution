import React, { useState, useEffect } from "react";
import LoadingOverlay from 'react-loading-overlay';
import 'babel-polyfill';
import './App.scss';

const App = () => {
    return (
        <LoadingOverlay active={false} spinner text='Please Wait...'>
            <div className="App">
            </div>
        </LoadingOverlay>
    );
};

export default App;