import React from "react"

export default class Demo15 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){

        this.setState({count:this.state.count+1},() =>{ console.log(this.state.count);}) // 回调函数

        this.setState((prevState) =>({
            count:prevState.count + 1
        }))
        this.setState((prevState) =>({
            count:prevState.count + 1
        }))
        this.setState((prevState) =>({
            count:prevState.count + 1
        }))
    }

    render(){
        const { count } = this.state;
        return(
            <div className="container">
                1. 合并所有的异步执行，然后异步执行完毕之后，才会执行异步回调函数 <br/>

                { count }
            </div>
        )
    }
}