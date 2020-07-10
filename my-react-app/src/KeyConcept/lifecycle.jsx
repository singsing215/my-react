import React from "react"
import png from "./react-life-cycle.jpeg"

export default class lifecycle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count:10
        }
    }

    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    increase = () => {
        this.setState({
            count: this.setState().count += 1
        })
        console.log(this.setState().count)
    }

    clickHandel=()=>{
        this.props.child2parent("props子传父传参"); //data 传参
    }

    render() {
        const {count} = this.state
        return (
            <div class="container">
                React生命周期函数 <br />
                初始化props，初始化state <br />
                componentWillMount(): 组件render()之前执行 <br/>
                渲染函数render() <br/>
                componentDidMount(): 组件render()之后执行 <br/>
                shouldComponentUpdate(): 返回true和false，true允许改变 return true<br/>
                componentWillUpdate(): 数据改变之前执行(state,props) <br/>
                componentDidUpdate(): 数据修改完成(state,props) <br/>
                componentWillReceiveProps(): props改变之前 <br/>
                componentWillUnmount()：组件卸载前执行 <br/>
                state修改：shouldComponentUpdate return true  <br/>
                {count} <br/>
                <button onClick={this.increase}>修改state</button> <br/>
                {this.props.title} <br/>
                父传子：props <br/>
                子传父：事件回传方案 <br/>
                (注释App.jsx倒数两个按钮)<br/>
                <button onClick={this.clickHandel}>子传父修改props</button> <br/>
                <img class="img-responsive" src={png} width={600} alt={"alt"}></img>
            </div>
        )
    }
}