import '../css/layout.css'
import React from 'react'
import ToolbarContainer from './toolbarContainer'
export default class LayoutContainer extends React.Component {
    render() {
        console.log(this.props)
        const {content, toolbar} = this.props
        return (
            <div>
                <ToolbarContainer/>
                {content}
            </div>
        )
    }
}
