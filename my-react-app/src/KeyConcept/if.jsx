import React from "react"

export default class iff extends React.Component {
    constructor() {
        super();
        this.state = {
            login: false,
            content: []  //"1","2"
        }
    }

    login = () => {
        this.setState({
            login: true
        })
    }

    logout=()=>{
        this.setState({
            login: false
        })
    }

    render() {
        const {content} = this.state;
        let showView = this.state.login ? <div>hello,kenny</div> : <div>请登录</div>

        return (
            <div class="container">
                条件渲染 <br />
                1. 对视图进行切换 （登录前后显示不同）<br />
                let showView = this.state.login ? 登陆后 : 登录前 <br/>
                2. 做缺省值(map(),loading..) <br />
                textcontent.length 大于 0 ?显示内容 : loading <br/>
                {showView}
                <button onClick={this.login}>登录</button>
                <button onClick={this.logout}>登出</button>
                {
                    content.length>0?
                    <div>
                        {
                            content.map((element,index) =>{
                            return <p key={index}>{element}</p>
                            })
                        }
                    </div>
                    : <div>loading content....</div>
                }
            </div>
        )
    }
}