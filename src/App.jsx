import React from "react"
import { Container } from "@mui/material";
import logo from './logo.svg';
import './App.css';
import { Form } from "./components/form"

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <Container className="app-content">
                <Form/>
            </Container>
        </div>
    );
}

export default App;
