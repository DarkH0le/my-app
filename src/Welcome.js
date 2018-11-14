import React, {Component} from 'react';

class Welcome extends Component {

    render(){
        const {user} = this.props;

        return(
            // 'mt-3 margin top 3 units | 'pl-1' padding left one unit | 'text-primary' text colors
            <div className="text-center mt-3">
                <div className="text-secondary pl-1 font-weight-bold">
                    Welcome {user}
                </div>,
                <a href="/" className="font-weight-bold pl-1 text-primary">LogOut</a>
            </div>
        );
    }
}
export default Welcome;