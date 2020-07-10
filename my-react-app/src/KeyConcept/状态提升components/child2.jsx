import React from "react"

export default class child2 extends React.Component{

    render(){
        return(
            <div class="container">
                状态提升child2 <br/>
                美元：
                <p>{this.props.money*8}</p>
            </div>
        )
    }
}