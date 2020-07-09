import React from 'react';
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import render from "./KeyConcept/render";
import component from "./KeyConcept/component";
import props from "./KeyConcept/props";
import state from "./KeyConcept/state";
import lifecycle from "./KeyConcept/lifecycle";
import setstate from "./KeyConcept/setState";
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




function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
