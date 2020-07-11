import React from "react"
import MemoChild from "./MemoChild"


export default class MemoDemo extends React.PureComponent{

    state = {
        time:new Date()
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                time:new Date()
            })
        },1000)
    }

    render(){
        console.log("render");
        return(
            <div className="container">
                1. memo渲染优化 <br/>
                2. React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。 <br/>
                3. 子export default React.memo(Child) 渲染一次<br/>

                <MemoChild seconds={"传递1"}/>
                { this.state.time.toString() }
            </div>
        )
    }
}