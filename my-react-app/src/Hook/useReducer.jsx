import React,{ useReducer } from "react"

const initialState = { count:0 };

function reducer(state,action){
    switch(action.type){
        case "incrment":
            return { count:state.count+1 }
        case "decrement":
            return { count:state.count-1 }
        default:
            throw new Error();
    }
}

function Counter(){

    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <div className="container">
            1. useState 的替代方案 <br/>
            2. switch 多函数合一 <br/>
            3.

            Count:{ state.count }
            <button onClick={() => dispatch({ type:"incrment" })}>+</button>
            <button onClick={() => dispatch({ type:"decrement" })}>-</button>
        </div>
    )
}

export default Counter