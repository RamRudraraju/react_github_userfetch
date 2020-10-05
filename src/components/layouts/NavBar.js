// 2) Class based components & Functional Components 
//  A) Class base components   -- rce tab
//  B) exporting C B C.

import React from 'react';
import PropTypes from 'prop-types';

/*
export class NavBar extends Component {
   static defaultProps = {
       title: 'Github Finder',
       icon: 'fab fa-github'
   };
  
   static propTypes = {
       title: PropTypes.string.isRequired,
       icon: PropTypes.string.isRequired
   }

    render() {
        return (
            <nav className = "navbar bg-primary">
                <h1>
                    {this.props.title}
                </h1>
            </nav>
        )
    }
}  */

const NavBar = (props) => {
         return (
             <nav className = "navbar bg-primary">
                 <h1>
                     {props.title}
                 </h1>
             </nav>
         )
 }

NavBar.defaultProps = {
    title: 'Github Users Finder',
    icon: 'fab fa-github'
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;
