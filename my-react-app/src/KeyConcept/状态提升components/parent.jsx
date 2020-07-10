import React from "react"
import Child1 from "./child1"
import Child2 from "./child2"

export default class parent extends React.Component{

    constructor() {
        super();
        this.state = {
            money:1
        }
    }

    changeHandler=(e)=>{
        this.setState({
            money:e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                1. 状态提升parent <br/>
                2. 组件间数据传递 <br/>
                3. 使用受控组件 <br/>
                4. 父数据更改传两个子页 <br/>
                5. 父页constructor设置state有money:1 <br/>
                6. 父页子组件money=大括号this.state.money大括号 <br/>
                7. 子页1大括号this.props.money大括号<br/>
                8. 子页2大括号this.props.money*7大括号<br/>
                <input type="text" value={this.state.money} onChange={this.changeHandler}/> <br/>
                Child1: <br/>
                <Child1 money={this.state.money}/>
                Child2: <br/>
                <Child2 money={this.state.money}/>
            </div>
        )
    }
}