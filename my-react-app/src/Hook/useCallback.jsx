import React,{useState,useCallback} from "react"

const Demo11 =() =>{
    const [ count,setCount ] = useState(0);
    const [ count1,setCount1 ] = useState(0);

    function clickHandler(){
        setCount(count+1)
    }

    return(
        <div className="container">
            1.  useCallback(箭头函数,[count])优化 <br/>
            2. 第二个参数count决定了是否允许第一个参数箭头函数执行：setCount1(count1+1) <br/>
            3. 如果count发生变化则允许执行，否则则不允许执行 <br/>
            4. 第一个参数第一次会执行一次，之后才会判断第二个参数是否发生变化 <br/>
            5. 减少不必要渲染，节省资源 <br/>

            <p>{ count }</p>
            <button onClick={ clickHandler }>Click me</button>

            <p>{ count1 }</p>
            <button onClick={ useCallback(() => setCount1(count1+1),[count])}>Click me</button>
        </div>
    )
}

export default Demo11