import React from 'react';
import LinksComponent from './LinksComponent';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <h4>Task Management System</h4>
                <LinksComponent/>
            </div>
        )
    }
}


export default HeaderComponent;