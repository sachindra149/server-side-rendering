import React, { Component } from 'react';
import logo from '../img/logo-judo-heroes.png';

class Header extends Component {
	render() {
		console.log(window.location.origin);
		return (
			<header className="fullWidth">
				<img src={logo} alt="Judo Heros" title="Judo Heros" />
			</header>
		)
	}
}

export default Header;