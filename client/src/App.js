import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import TopBar from './components/topbar';
import UserDetailTable from './components/userDetailTable';
import './App.scss';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/initialvalues').then((response) => {
            this.setState(() => {
                return {
                    userData: response.data
                }
            })
        })
    }
    onChange(e, target) {
        let field = this.state.userData.find((d) => d.key === target);
        field.value = field.type === 'check' ? !field.value : e.target.value;
        this.setState({
            userData: [
                ...this.state.userData.map((d) => {
                    return d.key !== target ? d : field;
                }),
            ]
        });
        console.log(target, e.target.value);
    }
    onSave() {
        axios.post('http://localhost:8000/api/savevalues', {
            userData: this.state.userData
        });
    }
    render() {
        return (
            <div className="App">
                <TopBar />
                <UserDetailTable userData={this.state.userData} onChange={this.onChange} />
                <Button className="float-right saveButton" onClick={this.onSave}>SAVE</Button>
            </div>
        );
    }
};

export default App;