import React from "react"

export default class form1 extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        alert('提交的名字: ' + this.state.value);
        e.preventDefault(); //阻止跳转
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
            <div className="container">
                1. 表单，受控组件 <br />
                2. form onSubmit 阻止跳转e.preventDefault()<br />
                3. input onChange <br />
                4. 多个input用非受控组件
                {/* <form action=""> */}
                <form onSubmit={this.handleSubmit}>
                    <label>名字:<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                    <button type="submit" value="提交">提交</button>
                </form>
            </div>
        )
    }
}