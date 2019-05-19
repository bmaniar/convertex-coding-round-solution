import React, { Component } from 'react';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';

import TopBar from './components/topbar';

import './App.scss';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/initialvalues").then((response) => {
            this.setState(() => {
                return {
                    userData: response.data
                }
            })
        })
    }
    render() {
        return (
            <LoadingOverlay active={false} spinner text='Please Wait...'>
                <div className="App">
                    <TopBar />
                </div>
            </LoadingOverlay>
        );
    }
};

export default App;