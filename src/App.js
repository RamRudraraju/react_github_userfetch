import React from 'react';
import './App.css';
import Navbar from './components/layouts/NavBar';
//import UserItem from './components/layouts/users/UserItem';
import Users from './components/layouts/users/Users';
import axios from 'axios';
import Search from './components/layouts/users/Search';
import Alert from './components/layouts/Alert';

class App extends React.Component{

  // componentDidMount(){  // .then Syntax 
  //   console.log(" componentDidMount ");
  //   axios.get('https://api.github.com/users')
  //          .then(res => console.log(res.data));
  // }

  state = {
    users:[],
    loading: false,
    alert: null   // ***15) Adding Extra Parameter
  };

  /*
  async componentDidMount(){
    this.setState({ loading: true });

    const res =  await axios.get('https://api.github.com/users');
    console.log("res.data : ", res.data);
    this.setState({ users: res.data, loading: false });
    
   // Fetch: https://fetch-hiring.s3.amazonaws.com/hiring.json
  // axios.get('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json').then(res => console.log(res.data));
  }
  */
  // ***4) Search Githunb Users
  searchUsers = async (text) => {
       this.setState({loading: true});

       console.log(" text : ", text);

       const res =  await axios.get(`https://api.github.com/search/users?q=${text}`);
       console.log("res.data : ", res.data);
       this.setState({ users: res.data.items, loading: false });
  }

  // 14) III - function Def
  clearUsers = () => this.setState({users:[], loading: false});

  // 15) III - function Def & setting the State.
  setAlert = (msg, type) => {
      console.log(" -- setState --");
     this.setState({ alert:{msg:msg, type:type}});

     setTimeout(() => this.setState({alert: null}), 5000);
  }

  render(){     // Life cycle method.  
    //const numbers = [1, 2, 3, 4, 5];

    // Destructuring const {users, loading} = this.state;

    return (
      <div className="App">
        <Navbar />  
        <div className="container" > 
            {/* ***3)  Passing the Method as a prop. 
                   14) II - Catching the props method
                   15) II - catching props of method of setAlert 
              */}  
           
           <Alert alert={this.state.alert}/>
           <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                   showClear={this.state.users.length > 0 ? true : false}
                   setAlert={this.setAlert}/>  
           
           <Users loading={this.state.loading} users={this.state.users}/>
        </div>

      </div>
    );
  }
}

export default App;
