import React from 'react'
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return (
        <nav class="site-navigation text-center " role="navigation">
              <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block mb-0">
                <li class="active"><a href="index.html">About</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="index.html">Activities</a></li>
                <li><a href="category.html">Technology</a></li>
                <li><a href="category.html">Latest</a></li>
              </ul>
        </nav>
        );
    }
}

export default NavBar;