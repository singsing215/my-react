import React from "react"
import { NavLink } from "react-router-dom"
import "./Nav.css"


export default  class Nav extends React.Component {
  render() {
    // console.log(this.props.nav)
    // {/* 列表渲染呈现两个nav */ }
    return (
      // <div>
      //   <h3>{this.props.title}</h3>
      //   <ul>
      //     {
      //       this.props.nav.map((element, index) => {
      //         return <li key={index}>{element}</li>
      //       })
      //     }
      //   </ul>
      // </div>

      <div id="navbar">
        <header>
            <nav  className="navbar navbar-expand-lg navbar-light" id="nav">
              <NavLink exact to='/home'>Home</NavLink>
              <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
              </button>
              <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div  className="navbar-nav">
                  <NavLink exact to='/render'>render</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/component'>component</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/props'>props</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/state'>state</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/lifecycle'>lifecycle</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/setstate'>setState 1</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/setState2'>setState 2</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/if'>if</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/listkey'>list+key</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/parent'>状态提升parent</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/child1'>状态提升child1</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/child2'>状态提升child2</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/compose'>compose</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/form1'>form1</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/refs'>refs</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/form2'>form2</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/propsTypee'>propsType</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/get'>get</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/post'>post</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/withRouter'>withRouter</NavLink>
                </div>
                <div  className="navbar-nav">
                  <NavLink exact to='/prompt'>prompt</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useState'>useState 1</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useEffect'>useEffect 1</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useState2'>useState 2</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useEffect2'>useEffect 2</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/TodoForm'>TodoForm</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/TodoList'>TodoList</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useEffectOp'>useEffectOp</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/HookGet'>HookGet</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/HookGet2'>HookGet2</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/ReactMemo'>ReactMemo</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/MemoChild'>MemoChild</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useCallback'>useCallback</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useReducer'>useReducer</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useContextM'>useContextM</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/useContextC'>useContextC</NavLink>
                </div>
                <div className="navbar-nav">
                  <NavLink exact to='/contextType'>contextType</NavLink>
                </div>
              </div>
            </nav>
        </header>
      </div>
    )
  }
}