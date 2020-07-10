import React from "react"
import PropTypes from 'prop-types'

export default class propesTypee extends React.Component {
    render() {
        return (
            <div class="container">
                1. 使用 PropTypes 进行类型检查 <br />
                2. 增强程序的健壮性 <br />
                3. import PropTypes from 'prop-types' <br />
                4. 通过propTypes验证title: PropTypes.string <br/>
                5. App.jsx注释 <br/>

                {this.props.title}

            </div>
        )
    }
}


propesTypee.propTypes = {
    title: PropTypes.string
};