import React,{ useState } from "react"

export default () =>{

    const [count,setCount] = useState(0);

    return(
        <div className="container">
            1. Hook可以不编写 class 的情况下使用 state <br/>
            2. import useState <br/>
            3. const [count,setCount] = useState(0);<br/>
            4. [状态,setCount修改状态], 不用setState <br/>
            Hello:{ count }
            <button onClick={ () =>{ setCount(count+1) } }>setCount(count+1)</button>
        </div>
    )
}

// export default class Demo1 extends React.Component{

//     state = {
//         count:0
//     }

//     render(){
//         return(
//             <div>
//                 Hello:{ this.state.count }
//             </div>
//         )
//     }
// }