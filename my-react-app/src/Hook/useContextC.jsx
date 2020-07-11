import React,{ useContext } from "react"
import { MyContext } from "./useContextM"

function ChildPage(){
    return(
        <p>{ useContext(MyContext) }</p>
    )
}

export default ChildPage