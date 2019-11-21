import React, { Component } from 'react';

const flagsList = {
	"cu": {
		"name": "Cuba",
		"icon": "flag-cu.png",
	},
	"fr": {
		"name": "France",
		"icon": "flag-fr.png",
	},
	"jp": {
		"name": "Japan",
		"icon": "flag-jp.png",
	},
	"nl": {
		"name": "Netherlands",
		"icon": "flag-nl.png",
	},
	"uz": {
		"name": "Uzbekistan",
		"icon": "flag-uz.png",
	}
}

class Flag extends Component {
	render() {
		return (
			<span>
				<img src={`../src/img/${flagsList[this.props.country].icon}`} alt={`${flagsList[this.props.country].name}`} title={`${flagsList[this.props.country].name}`} /> {`${flagsList[this.props.country].name}`}
			</span>
		)
	}
}

export default Flag;