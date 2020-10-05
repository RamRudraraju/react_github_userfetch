import React, { Component } from 'react';
//import PropTypes from 'prop-types';


export class Search extends Component {

    // I
   state = {
       text: ''
   };

//    static PropTypes={
//      //  searchUsers: PropTypes.func.isRequired
//     //  clearUsers: PropTypes.func.isRequired
//    };

   onChange = (e) => {
       this.setState({ text: e.target.value });  // III) Accessing Input parameters & Setting the State 
       //  for multiple: {[e.target.name] : e.target.value }
   };

   onSubmit = (e) => {
       e.preventDefault();
       console.log("onSubmit Input Value: ", this.state.text);

       if(this.state.text === ''){
            this.props.setAlert('Please enter Something', 'light'); // ***15) I
       } else{
        this.props.searchUsers(this.state.text);  // ***2) Calling the Function in props
        this.setState({text: ''});
       }
       // Explicite Binding Require without Arraow Functions.
   };


    render() {
        return (
            <div>
                {/* this.onSubmit.bind(this) --> When we are not using Arrow Function. */}
                {/* ***1) Submiting form is calling onSubmit */}
                <form onSubmit={this.onSubmit} className="form">
                    <input type='text' name='text' 
                           placeholder='Search Users...' 
                        // Attaching Input to the state
                           value={this.state.text}// I) Input attaching to the State (But it won't let us Type)
                        // Handaling onChange.
                           onChange={this.onChange}//II) We need to have onChange event for Updating state.
                           />   
                    <input type='submit' name='Search' className='btn btn-dark btn-block' />
                </form>
              
                {this.props.showClear && ( <button className="btn btn-light btn-block" 
                        onClick={this.props.clearUsers}   // 14) I -- Function attached to props. - Sending this UP.
                > Clear </button> )}
                
            </div>
        )
    }
}

export default Search
