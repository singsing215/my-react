import React from "react"
import ChildPage from "./useContextC"

// props 路由 自定义事件
export const MyContext = React.createContext();
function MainPage(){
    return(
        <div className="container">
            1. useContext()任意组件间数据传递 <br/>
            2. 不是真正公共状态形式 <br/>
            3. 父子都要import <br/>
            4. 子useContext() <br/>
            5. MyContext.Provider提供者 <br/>
            <MyContext.Provider value="Hello React useContext">
                <ChildPage />
            </MyContext.Provider>
        </div>
    )
}

export default MainPage