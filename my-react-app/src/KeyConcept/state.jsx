import React from "react"

export default class state extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            login: false
        }
    }

    increment() {
        this.setState({
            count: this.setState().count += 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.setState().count -= 1
        })
    }

    logthis = () => {
        console.log(this)
    }

    login = () =>{
        this.setState({
            login: this.setState().login = true
        })
    }

    logout = () =>{
        this.setState({
            login: this.setState().login = false
        })
    }


    render() {
        let shouView = this.state.login ? "true" : "false"
        return (
            <div className="container">
                1. StateComponent <br />
                2. 组件的state <br />
                3. 组件的状态=state <br />
                4. 用state操作页面元素的改变，而不用操作DOM <br />
                5. constructor(props) <br />
                6. 在render return: this.state.count <br />
                7. 状态count <br />
                8. 在函数用setState改变状态count <br />
                9. 按钮this.increment.bind.(this) <br />
                10. 箭头函数不用bind.(this) <br />

                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.decrement}>减少</button>
                <button onClick={this.logthis}>关于this</button>
                <br />
                11. 根据状态login 小写true false 显示不同数据 <br />
                <p>{shouView}</p>
                <button onClick={this.login}>登录</button>
                <button onClick={this.logout}>登出</button>
            </div>
        )
    }
}