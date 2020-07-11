import React from 'react';
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import render from "./KeyConcept/render";
import component from "./KeyConcept/component";
import props from "./KeyConcept/props";
import state from "./KeyConcept/state";
import lifecycle from "./KeyConcept/lifecycle";
import setstate from "./KeyConcept/setState";
import setState2 from "./KeyConcept/setState2";
import iff from "./KeyConcept/if";
import listkey from "./KeyConcept/list&key";
import parent from "./KeyConcept/状态提升components/parent";
import child1 from "./KeyConcept/状态提升components/child1";
import child2 from "./KeyConcept/状态提升components/child2";
import compose from "./KeyConcept/compose";
import form1 from "./KeyConcept/form1";
import refs from "./KeyConcept/refs&dom";
import form2 from "./KeyConcept/form2";
import propsTypee from "./KeyConcept/propesTypee";
import get from "./Fetch/get";
import post from "./Fetch/post";
import MineDemo from "./KeyConcept/withrouter";
import prompt from "./KeyConcept/prompt";
import useState from "./Hook/useState";
import useEffect from "./Hook/useEffect";
import useState2 from "./Hook/useState2";
import useEffect2 from "./Hook/useEffect2";
import TodoForm from "./Hook/TodoForm";
import TodoList from "./Hook/TodoList";
import useEffectOp from "./Hook/useEffectOp";
import HookGet from "./Hook/HookGet";
import HookGet2 from "./Hook/HookGet2";
import ReactMemo from "./Hook/ReactMemo";
import MemoChild from "./Hook/MemoChild";
import useCallback from "./Hook/useCallback";
import useReducer from "./Hook/useReducer";
import useContextM from "./Hook/useContextM";
import useContextC from "./Hook/useContextC";
import contextType from "./Hook/contextType";
// import Compose from "./KeyConcept/compose";
// import Lifecycle from "./KeyConcept/lifecycle"; //props修改：在父App.jsx修改props,传title给lifecycle.jsx组件
// import PropsTypee from "./KeyConcept/propesTypee";


export default class App extends React.Component {

  //生命周期函数修改props,传title给lifecycle组件
  constructor() {
    super();
    this.state = {
      title: "props"
    }
  }

  parent2child = () => {
    this.setState({
      title: "父props传子"
    })
  }

  child2parent = (data) => {
    this.setState({
      title: data  //data   //"props已修改"
    })
  }

  render() {

    // //props
    // const nav1 = ["1", "2", "3"]//多个导航，App.js传送两个nav，在Nav.jsx接收两个nav
    // const nav2 = ["4", "5", "6"]

    return (
      <div className="App">
        <Router>
          {/* props */}
          {/* <Nav nav={ nav1 } title="主导航"/>
        <Nav nav={ nav2 } title="副导航"/> */}
          <Nav />
          <Route path="/render" component={render}></Route>
          <Route path="/component" component={component}></Route>
          <Route path="/props" component={props}></Route>
          <Route path="/state" component={state}></Route>
          <Route path="/lifecycle" component={lifecycle}></Route>
          <Route path="/setstate" component={setstate}></Route>
          <Route path="/if" component={iff}></Route>
          <Route path="/listkey" component={listkey}></Route>
          <Route path="/parent" component={parent}></Route>
          <Route path="/child1" component={child1}></Route>
          <Route path="/child2" component={child2}></Route>
          <Route path="/compose" component={compose}></Route>
          <Route path="/form1" component={form1}></Route>
          <Route path="/refs" component={refs}></Route>
          <Route path="/form2" component={form2}></Route>
          <Route path="/propsTypee" component={propsTypee}></Route>
          <Route path="/get" component={get}></Route>
          <Route path="/post" component={post}></Route>
          <Route path="/withRouter" component={MineDemo}></Route>
          <Route path="/prompt" component={prompt}></Route>
          <Route path="/useState" component={useState}></Route>
          <Route path="/useEffect" component={useEffect}></Route>
          <Route path="/useState2" component={useState2}></Route>
          <Route path="/useEffect2" component={useEffect2}></Route>
          <Route path="/TodoForm" component={TodoForm}></Route>
          <Route path="/TodoList" component={TodoList}></Route>
          <Route path="/useEffectOp" component={useEffectOp}></Route>
          <Route path="/HookGet" component={HookGet}></Route>
          <Route path="/HookGet2" component={HookGet2}></Route>
          <Route path="/ReactMemo" component={ReactMemo}></Route>
          <Route path="/MemoChild" component={MemoChild}></Route>
          <Route path="/useCallback" component={useCallback}></Route>
          <Route path="/useReducer" component={useReducer}></Route>
          <Route path="/useContextM" component={useContextM}></Route>
          <Route path="/useContextC" component={useContextC}></Route>
          <Route path="/contextType" component={contextType}></Route>
          <Route path="/setState2" component={setState2}></Route>
        </Router>
        {/* 父传子 */}
        {/* <Lifecycle title={this.state.title} child2parent={this.child2parent}/>
        props修改：在父App.jsx修改props,传title给lifecycle.jsx组件(父传子) <br/>
        <button onClick={this.parent2child}>父传子修改props</button> */}

        {/* 组合 */}
        {/* <Compose>
          <div>组合children</div>
        </Compose> */}

        {/* PropTypes类型检查 */}
        {/* <PropsTypee title="来自App的title" /> */}
      </div>
    );
  }
}
