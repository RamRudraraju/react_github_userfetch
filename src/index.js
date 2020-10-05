import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(         //(What, Where we are rendering)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// 1*) Basic Folder structure 
// 2*) 1) C B C - NavBar.js            2) import & component usage - App.js
// 3*) 1) css class usage - NavBar.js  2) Font Awesome
// 4*) 1) Props = Propertes that we pass into a component from outside. App.js (they are like attributes in the HTML element)
//     2) Usage of prop. - we can get them from 'this.props' - NavBar.js
//     3) static defaultProps Obj - NavBar.js
//     4) static propTypes Obj - are basically type checking(String, Array or Obj) => Shortcut: impt Ent
// 5*) Component level State : (State Contined with in Component - We can later use it as App level state passing as props);
//     Two ways to add it:-
//     a) constructor - it is basically a function that runs when a component runs. We can define the Obj with in it.
//        To pull the parameters in the state. We have to use "this.state.()". 
//     b) We can dirently define it as an Object.
//     c) destucturing 
// 6*) Insterd of outputting a regular div (or) img; we could return a component that we have created. -- Users.js
// Note: With the 'hooks' we can have stages with in "Function Components". 
// 7*) Function Based component: (Conversion from from Class based comp to Func based comp) 
//       a) Not required render method, b) It should accept a 'props', c) this.props = props   
// 8*) App.js: 
//       a) Since we don't using Redux or Context there is no centralized store to store data. 
//       b) Next Best thing is: Have it in App.js. So we can send the state directly to COMPONENTS througth PROPS.
//          It Similar to sending users Obj to UserItem as a prop --> UserItem.js
// 9*) Life Cycle method:
//       render               -> (All ways Require)
//       componentDidMount()  -> Runs when the componeny is mounted.
//                               If we want to make a http-request when a app or component is loaded we have to make it inside it
//                               We are using 'axios' for making http requests. Axios dealing with promises so .then
//                            -> axios library to get the data (promise.then() & async await).
//                            -> 
// 10*) this.state.loading = true (Not possible to change it like this atleast with class based components).
//      this.setState({loading: true}); --> Correct way.
// 11*) shoptcut to create Function Based component --> racf Tab

// Day 2
// 12*) Search.js --> A) class based component: rce TAB
//                    Input & Button 
//                    Input attached to the State(I) & handaling onChange using Method(II).       
//                    We can access the input value using 'e.target.value'
//                    Handaling onSubmit using Arrow Functions. 
//                       Without arrow function: this.onSubmit.bind(this)
//                    (III)
//                    B) onSubmit
// 13*) Prop Jornaling -> a)Passing props more than 2 or 3 levels deep. (Probles if we don't use Redux or Context)
//                        b)Insterd of sending prop down we are sending prop up. *** 4 steps in Search.js & App.js              
//
// Day 3
// 14*) Clear Button --> All we are doing is calling a prop method. (Search.js)
//                        a) We are passing props UP. - I, II(Catching the props), III(Function Definition)
//                        b) Based on prop True or False we are displaying an Element. 
//Day 4
//15*) Alert System -->Passing props UP:  I, II(Catching the props),
//                                        III(Function Definition to set the state of a parameter)
//     Alert Component --> To display something on the screen.We created a component.
//                         Importing the Alert
//                         Using alert in App.js & SetTimeout.
//
//
//
//
