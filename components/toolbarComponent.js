import '../css/toolbar.css'
import React from 'react'
export default class ToolbarComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     };
    // }
    render() {
        //const {isOpen} = this.props;
        return (
            <div className="toolbar c12">
                <div className='menu'>&#9776;</div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        )
    }
}
