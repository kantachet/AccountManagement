
import React from 'react'
import { openNav,closeNav } from '../actions'
import ToolbarComponent from '../components/toolbarComponent'
export default class ToolbarContainer extends React.Component {
    render() {
        return (
            <ToolbarComponent/>
        )
    }
}
