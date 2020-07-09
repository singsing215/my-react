import React from "react"
import png from "./react-life-cycle.png"

export default class lifecycle extends React.Component {
    render() {
        return (
            <div class="container">
                React生命周期函数 <br />
                <img src={png}></img>
            </div>
        )
    }
}