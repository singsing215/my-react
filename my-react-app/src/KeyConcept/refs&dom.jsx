import React from "react"

export default class refs extends React.Component{

    constructor() {
        super();
        this.HelloDiv = React.createRef();
    }

    componentDidMount(){
        console.log(this.HelloDiv.current)
    }

    changecoloer=()=>{
        this.HelloDiv.current.style.color="red"
    }

    render(){
        return(
            <div className="container">
                1. Refs和DOM <br/>
                2. DOM可操作时间，音频视频播放时长 <br/>
                3. 日常不推荐操作DOM <br/>
                4. 适合使用 refs 的情况：<br/>
                管理焦点，文本选择或媒体播放 <br/>
                触发强制动画 <br/>
                集成第三方 DOM 库 <br/>
                5. 在div里ref=大括号this.HelloDiv大括号 <br/>
                6. 在constructor里this.HelloDiv = React.createRef(); <br/>
                7. 在componentDidMount里console.log(this.HelloDiv.current)获取完整div <br/>
                <div ref={this.HelloDiv}>Hello</div>
                <button onClick={this.changecoloer}>Refs修改Hello颜色</button>
            </div>
        )
    }
}