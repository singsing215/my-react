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
          <div  className="container">
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
                  <NavLink exact to='/setstate'>setstate</NavLink>
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
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}