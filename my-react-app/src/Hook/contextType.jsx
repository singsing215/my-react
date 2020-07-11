import React,{createContext} from "react"

const ThemeContext = createContext();

export default class Demo14 extends React.Component{
    state = {
        theme:"red"
    }

    render(){
        const { theme } = this.state;
        return(
            <div className="container">
                1. 3个class/组件数据传递 <br/>
                2. useContext扩展 <br/>
                3. import createContext <br/>
                4. static contextType = ThemeContext; <br/>
                5. const theme = this.context <br/>
                <ThemeContext.Provider value={ theme }>
                    <Middle></Middle>
                </ThemeContext.Provider>
            </div>
        )
    }
}

class Middle extends React.Component{
    render(){
        return(
            <div>
                <Bottom></Bottom>
            </div>
        )
    }
}

class Bottom extends React.Component{
    static contextType = ThemeContext;
    render(){
        const theme = this.context
        return(
            <div>
               <h1>{ theme }!!!</h1>
            </div>
        )
    }
}

// 旧方式
// class Bottom extends React.Component{
//     render(){
//         return(
//             <div>
//                 <ThemeContext.Consumer>
//                     { 
//                         theme => <h1>{ theme }</h1>
//                     }
//                 </ThemeContext.Consumer>
//             </div>
//         )
//     }
// }
