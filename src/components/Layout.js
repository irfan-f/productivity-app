import React, {Component} from 'react';
import CreateNote from './CreateNote'

class Layout extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <CreateNote/>
        </div>
        );
    }
}
 
export default Layout;