import React from 'react';
import UserItem from './UserItem'; //6*
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {

    // state = {  // We will get it from http
    //     users:[
    //         {
    //         login: "mojombo",
    //         id: 1,
    //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //         html_url: "https://github.com/mojombo"
    //        },
    //        {
    //         login: "defunkt",
    //         id: 2,
    //         avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    //         html_url: "https://github.com/defunkt"
    //        },
    //        {
    //         login: "pjhyett",
    //         id: 3,
    //         avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    //         html_url: "https://github.com/pjhyett"
    //        },
    //        {
    //         login: "wycats",
    //         id: 4,
    //         avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
    //         html_url: "https://github.com/wycats"
    //        }
    //     ]
    // }

      if(props.loading){
          return <Spinner />;
      }
     else {
        return (
            // <div className="card text-center" >
            //     {this.state.users.map(user => (  // Map is used to loop through each Object in the Array
            //         <div key={user.id}> {user.login} </div>     
            //     ))}
            // </div>

            // <div style={userStyle} >
            //     {this.state.users.map(user => (  // Map is used to loop through each Object in the Array
            //         <UserItem key={user.id} user={user} />  
            //     ))}
            // </div>
            
            <div style={userStyle} >
                {props.users.map(user => (  // Map is used to loop through each Object in the Array
                    <UserItem key={user.id} user={user} />  
                ))}
            </div>
           )
                }

}

Users.prototype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
