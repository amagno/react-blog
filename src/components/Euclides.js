import React from 'react'
import {Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

const funcaoEuclides = (numero1, numero2) => {
    let dividendo = numero1
    let divisor = numero2
    let z
    while(z !== 0) {
        z = dividendo % divisor
        dividendo = divisor
        divisor = z
    }

    return dividendo
}

const myStyle = { width: '400px', margin: '10px auto', border: '1px solid gray', padding: '20px' }
const Result = ({ result }) => {
    if(result){
        return (
            <div style={myStyle}>
                Resultado: {result}
            </div>
        )
    }
    return(
        <div style={myStyle}>Clique em calcular...</div>
    )       
}

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        }
    }
    number1Change(event) {
        this.setState({
            number1: event.target.value
        })
    }
    number2Change(event) {
        this.setState({
            number2: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            result: funcaoEuclides(this.state.number1, this.state.number2)
        })
    }
    render() {
        return (
        <div>            
            <Form horizontal className="form-euclides" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formHorizontalNumber1">
                    <ControlLabel>Número 1</ControlLabel>
                    <FormControl value={this.state.number1} onChange={this.number1Change.bind(this)} type="number" placeholder="Número 1"/>
                </FormGroup>
                <FormGroup controlId="formHorizontalNumber2">
                    <ControlLabel>
                        Número 2</ControlLabel>
                    <FormControl value={this.state.number2} onChange={this.number2Change.bind(this)} ref="number2" type="number" placeholder="Número 2"/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" bsStyle="primary">
                        Calcular
                    </Button>
                </FormGroup>
                <Result result={this.state.result}/>
            </Form>
            
        </div>
        )
    }
}