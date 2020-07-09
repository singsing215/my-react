import React from "react"
import { NavLink } from "react-router-dom";


export default class Nav extends React.Component {
    render() {
        return (
            <div id="navbar">
              <header>
                <div class="container">
                  <nav class="navbar navbar-expand-lg navbar-light" id="nav">
                    <a class="navbar-brand" ><NavLink exact to='/home'>Home</NavLink></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                        <a class="nav-item nav-link"><NavLink exact to='/render'>render</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/component'>component</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/props'>props</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/state'>state</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/lifecycle'>lifecycle</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/setstate'>setstate</NavLink></a>
                      </div>
                      <div class="navbar-nav"> 
                        <a class="nav-item nav-link" ><NavLink exact to='/if'>if</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/listkey'>list+key</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/parent'>状态提升parent</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/child1'>状态提升child1</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/child2'>状态提升child2</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/compose'>compose</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/form1'>form1</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/refs'>refs</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/form2'>form2</NavLink></a>
                      </div>
                      <div class="navbar-nav">
                        <a class="nav-item nav-link" ><NavLink exact to='/propsTypee'>propsType</NavLink></a>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
            </div>
        )
    }
}