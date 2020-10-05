import React from 'react';
import PropTypes from 'prop-types';

/* // Class based components.
class UserItem extends Component {
    
    // state = {   // We will get it from http
    //     login: "mojombo",
    //     id: 1,
    //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo"
    //    }

      // State in constructor
    // constructor(){
    //    super();

    //    this.state = {   // We will get it from http
    //     login: "mojombo",
    //     id: 1,
    //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo"
    //    }
    // } 

    render() {
       const{ login, avatar_url, html_url } = this.props.user; // Destructuring // this.state

        return (
            <div className="card text-center">
                <img src={avatar_url} alt= "" className="round-img"
                     style={{ width : '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'> More </a>
                </div>
            </div>
        )
    }
} */

// 
const UserItem = (props) => {
       const{ login, avatar_url, html_url } = props.user; // Destructuring // this.state

        return (
            <div className="card text-center">
                <img src={avatar_url} alt= "" className="round-img"
                     style={{ width : '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'> More </a>
                </div>
            </div>
        )
} 

UserItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UserItem
