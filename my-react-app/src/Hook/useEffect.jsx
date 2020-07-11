import React, { useState, useEffect } from "react"

export default () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div className="container">
            1. Effect Hook 可以在函数组件中执行生命周期函数 <br/>
            2. import useState, useEffect <br/>
            3. useEffect：componentDidMount(), componentDidUpdate(), componentWillUnmount() <br/>
            4. useEffect(() =》 ,[]) 执行 componentDidMount() <br/>
            5. useEffect(() =》 ) 执行 componentDidMount() componentDidUpdate<br/>
            6. useEffect()要在顶层 <br/>

            {`You clicked ${count} times`}
            <button onClick={() => { setCount(count + 1) }}>setCount(count + 1)</button>
        </div>
    )
}


// export default class Demo2 extends React.Component{

//     state = {
//         count:0
//     }

//     componentDidMount(){
//         document.title = `You clicked ${this.state.count} times`
//     }

//     componentDidUpdate(){
//         document.title = `You clicked ${this.state.count} times`
//     }

//     render(){
//         return(
//             <div>
//                 Hello:{ `You clicked ${this.state.count} times` }
//                 <button onClick={ () =>{ this.setState({count:this.state.count+=1}) } }>Add</button>
//             </div>
//         )
//     }
// }