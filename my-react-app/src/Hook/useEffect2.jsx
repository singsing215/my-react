import React,{useState,useEffect } from "react"

class TokenForm extends React.Component{

    handlerSubmit = event =>{
        event.preventDefault(); //取消提交默认跳转
        const { setToken } = this.props; // 数据来源于props
        const token = this.tokenInput.value;
        if(token){
            setToken(token)
        }
    }

    render(){
        return(
            <form onSubmit={ this.handlerSubmit }>
                <input type="text" name="token" placeholder="enter your token" 
                    ref={ input => { this.tokenInput = input }}
                />
            </form>
        )
    }
}

const TokenApp = () =>{
    const [token,setToken] = useState(sessionStorage.getItem("token"))
    
    useEffect(() =>{
        sessionStorage.setItem("token",token); // 数据存在本地
    })

    return(
        <div>
            1. class + useEffect <br/>
            2. sessionStorage.getItem("token") 获取默认数据 <br/>
            3. sessionStorage.setItem("token") 数据存在本地 <br/>
            4. Application---Session---清空token <br/>
            <h1>Hello</h1>
            { token ? token : <TokenForm setToken={ setToken }/> }
        </div>
    )
}

export default TokenApp


// export default class TokenApp extends React.Component{

//     state = {
//         token:null
//     }

//     componentDidMount(){
//         // 数据存在本地
//         this.setState({token:sessionStorage.getItem("token")});
//     }

//     setToken = (token) =>{
//         sessionStorage.setItem("token",token);
//         this.setState({token})
//     }

//     render(){

//         const { token } = this.state;

//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <TokenForm />
//                 { token ? token : <TokenForm setToken={ this.setToken }/> }
//             </div>
//         )
//     }
// }

