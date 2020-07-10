import React from "react"
import qs from "querystring"
import api from "../api"

export default class post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            banners:[]  //设banners
        }
    }

    componentDidMount(){
        fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
            method:"POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                "Accept":"application/json,text/plain,*/*"
            },
            body:qs.stringify({
                user_id:"iwen@qq.com",
                password:"iwen123",
                verification_code:"crfvw"
            })
            // body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
        }).then(res => res.json())
        .then(data =>{
            console.log(data);
            
        })

        // 封装post
        api.getLogin({
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
        }).then(res => res.json()).then(data =>{
            console.log(data);
        })

    }
 
    render() {
        const { banners } = this.state;
        return (
            <div className="container">
                1. post有参数 <br />
                2. postman测试接口通不通 <br/>
                3. body字符串转对象类型import qs from "querystring" <br/>
                4. body:qs.stringify

            </div>
        )
    }
}


