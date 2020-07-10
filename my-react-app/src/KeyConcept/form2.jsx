import React from "react"

export default class form2 extends React.Component{

    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    getrefs=()=>{
        console.log(this.username.current.value);
        console.log(this.password.current.value)
    }

    render(){
        return(
            <div class="container">
                1. 表单，非受控组件 <br/>
                2. 多个input可用非受控组件 <br/>
                3. console.log(this.username.current.value) <br/>
                <input type="text" ref={this.username}/>
                <input type="text" ref={this.password}/>
                <button onClick={this.getrefs}>refs获取value</button>
            </div>
        )
    }
}