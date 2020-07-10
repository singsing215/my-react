import React from "react"
import api from "../api"

export default class get extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            banners:[]  //设banners
        }
    }

    componentDidMount(){
        fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            this.setState({
                banners:data.banner  //banner是要的内容
            })
        })

        // 封装get
        api.getChengpin().then(res => res.json()).then(data =>{
            console.log(data);
        })
    }

    render() {
        const { banners } = this.state;
        return (
            <div className="container">
                1. fetch 规范与 jQuery.ajax() 主要不同：当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。 <br />
                2. fetch基于promise <br/>
                3. import api from "../api"
                4. 在api/index.js封装get post函数<br/>
                5. 在api/const.js封装url <br/>
                {
                    banners.length > 0 ?
                    <ul>
                        {
                            banners.map((element,index) =>{
                                return <li key={index}> { element.title } </li>
                            })
                        }
                    </ul>
                    : <div>等待数据加载...</div>
                }
            </div>
        )
    }
}


