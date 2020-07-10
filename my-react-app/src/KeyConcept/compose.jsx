import React from "react"

export default class compose extends React.Component{
    render(){
        return(
            <div class="container">
                1. 使用组合实现组件间的代码重用<br/>
                2. this.props.children <br/>
                3. App.jsx注释
                {this.props.children}

            </div>
        )
    }
}