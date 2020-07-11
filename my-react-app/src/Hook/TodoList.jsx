import React,{useState} from "react"
import TodoForm from "./TodoForm"

const TodoList = () =>{

    const [todos,setTodos] = useState([]); //todolist是一个列表：数组

    function setValue(text){
        setTodos([{ text },...todos]); // 数组合并
        console.log(todos);
    }

    return(
        <div className="container">
            1. 导入TodoForm组件 <br/>
            <TodoForm onSubmit={ setValue }/>
            <div>
                {
                    todos.map((element,index) =>{
                        console.log(element)
                        return <div key={index}>{ element.text }</div>
                    })
                }
            </div>
            <button onClick={ () =>{ setTodos([])} }>clear</button>
        </div>
    )
}

export default TodoList