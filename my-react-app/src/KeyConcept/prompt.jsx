import React from "react"
import { Prompt } from "react-router-dom"

export default class prompt extends React.Component{

    state = {
        name:""
    }

    render(){
        return(
            <div className="container">
                1. import Prompt <br/>
                2. when message <br/>
                <Prompt when={ !!this.state.name } message={ "Sure to leave?" }/>
                <input type="text" value={this.state.name} onChange={ (e) => this.setState({name:e.target.value}) }/>
            </div>
        )
    }
}