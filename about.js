import React from 'react'
import {Link} from 'react-router'
export default class about extends React.Component {
    render() {
        return (
            <div >
                This is content from about page
                <Link to="/">Home</Link>
            </div>

        )
    }
}
