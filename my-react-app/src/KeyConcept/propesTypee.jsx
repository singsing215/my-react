import React from "react"
import PropTypes from 'prop-types'

export default class propesTypee extends React.Component {
    render() {
        return (
            <div className="container">
                1. 使用 PropTypes 进行类型检查 <br />
                2. 规范数据类型，增强程序的健壮性 <br />
                3. 类型：array,bool,func,number,object,string,symbol <br/>
                4. import PropTypes from 'prop-types' <br />
                5. 通过propTypes验证title: PropTypes.string <br/>
                6. 必选项：title: PropTypes.string.isRequired <br/>
                6. App.jsx注释 <br/>
                {this.props.title}
            </div>
        )
    }
}


propesTypee.propTypes = {
    title: PropTypes.string
};