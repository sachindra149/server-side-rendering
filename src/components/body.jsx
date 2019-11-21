import React, { Component } from 'react';
import Header from './header.jsx';
import Atheletes from './display.jsx';
import Footer from './footer.jsx';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Atheletes />
				<Footer />
			</div>
		)
	}
}

export default App;