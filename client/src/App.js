import React, { Component } from 'react';
import axios from 'axios';

import TopBar from './components/topbar';
import UserDetailTable from './components/userDetailTable';
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
            <div className="App">
                <TopBar />
                <UserDetailTable userData={this.state.userData} />
            </div>
        );
    }
};

export default App;