import React from "react"

export default class setstate extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log("增加调用函数同步获取")
            console.log(this.state.count) //实时获取
        })
        console.log("获取上一次的值（异步）")
        console.log(this.state.count) //获取上一次的值
    }

    // async function 
    async asyncincrement(){
        await this.setStateAsync({
            count: this.state.count + 1
        })
        console.log("先执行await，再console.log")
        console.log(this.state.count)
    }

    setStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state,resolve)
        })
    }

    render() {
        return (
            <div className="container">
                1. setState会引起试图重绘 <br />
                2. setState在可控情况下异步，非可控同步。具体看state内部执行过程，涉及生命周期函数。<br />
                3. 默认获取上一次的值（异步） <br/>
                4. 增加调用函数同步获取数据 <br/>
                5. 用promis,async,await同步获取数据,要bind(this) <br/>
                6. Promise 是一个函数返回的对象，它代表了一个异步操作的最终完成或者失败。<br/>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>增加调用函数修改</button>
                <button onClick={this.asyncincrement.bind(this)}>async函数修改</button>
            </div>
        )
    }
}