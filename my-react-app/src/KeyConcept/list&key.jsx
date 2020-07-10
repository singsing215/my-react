import React from "react"

export default class listkey extends React.Component {

    constructor() {
        super();
        this.state = {
            userinfo: [
                {
                    name: "kenny",
                    age: 20,
                    sex: "male",
                    hobby: ["吃", "喝", "玩"]
                },
                {
                    name: "martin",
                    age: 30,
                    sex: "male",
                    hobby: ["拉", "弹", "唱"]
                },
                {
                    name: "admin",
                    age: 40,
                    sex: "male",
                    hobby: ["跑", "传", "收"]
                }
            ]
        }
    }

    pushData = () => {
        this.setState({
            userinfo: this.state.userinfo.concat({ //push返回数组长度
                name: "newdata",
                age: 50,
                sex: "female",
                hobby: ["唱", "吃", "拉"]
            })
        })
    }

    render() {
        return (
            <div class="container">
                1. 列表渲染，key <br />
                2. 复杂数组渲染, 复用列表渲染 <br />
                3. push()返回数组长度 <br />
                4. concat()方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。<br />
                5. key的意义减少重绘的加载，减少资源，减少渲染 <br />
                <ul>
                    {
                        this.state.userinfo.map((element, index) => {
                            return (
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.hobby.map((element, index) => {
                                                return <span key={index}>{element}</span>
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.pushData}>添加数据</button>
            </div>
        )
    }
}