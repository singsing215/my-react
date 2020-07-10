import React from "react"

export default class child1 extends React.Component {

    render() {
        return (
            <div class="container">
                状态提升child1 <br />
                人民币：
                <p>{this.props.money}</p>
            </div>
        )
    }
}