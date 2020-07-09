import React from "react"

export default class props extends React.Component{
    render(){
        return(
            <div>
                props组件的复用性<br/>
                用props传递数据<br/>
                Nav.jsx,在App引用<br/>
                多个导航，App.js传送两个nav，在Nav.jsx接收两个nav,组件被复用<br/>
                props:在App.jsx中的nav title <br/>
                props不可被修改，props属于App,不属于Nav数据 <br/>
            </div>
        )
    }
}