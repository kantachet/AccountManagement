import React from 'react'
import {Link} from 'react-router'
export default class App extends React.Component {
    render() {
        return (
            <div>
                THIS IS MY APP aaa
                <Link to="about">about</Link>
                {this.props.children}
            </div>
        )
    }
}
