import React ,{ useState,useEffect } from "react"

const Demo5 = () =>{
    const [count,setCount] = useState(0);
    const [name,setName] = useState("sam");

    useEffect(() => {
        console.log("执行");
        document.title = `you clicked ${count} times`;
    },[count]) //[count]:只监听count发生改变的时候，才会触发 componentDidUpdate


    return(
        <div className="container">
            1. useEffect(() =》 ,[count])只监听count发生改变的时候，才会触发 componentDidUpdate <br/>

            <p>Your cliced { count } times</p>
            <p>{ name }</p>
            <button onClick={ () =>setCount(count+1) }>setCount(count+1)</button>
            <button onClick={ () =>setName("sing") }>setName("sing")</button>
        </div>
    )
}

export default Demo5


// export default class Demo5 extends React.Component{

//     state = {
//         count:0,
//         name:"iwen"
//     }

//     componentDidMount(){
//         document.title = `you clicked ${this.state.count} times`;
//     }

//     componentDidUpdate(prevProps,prevState){
//         if(prevState.count !== this.state.count){
//             console.log("触发");
//             document.title = `you clicked ${this.state.count} times`;
//         }
//     }

//     clickCountHandler = () =>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     clickNameHandler = () =>{
//         this.setState({
//             name:"ime"
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <p>{ `you clicked ${this.state.count} times` }</p>
//                 <p>{ this.state.name }</p>
//                 <button onClick={ this.clickCountHandler }>click me</button>
//                 <button onClick={ this.clickNameHandler }>click me</button>
//             </div>
//         )
//     }
// }