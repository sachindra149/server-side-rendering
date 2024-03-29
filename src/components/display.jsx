import React, { Component } from 'react';
import athletes from '../data/athletes.jsx';
import AtheleteDetails from './athelete-details.jsx';

class Atheletes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showDetails: false,
			popupData: {}
		}
	}

	showDetails(id) {
		let dataAsProps = athletes.filter((item) => item.id === id);
		this.setState({
			showDetails: true,
			popupData: dataAsProps[0]
		});
		document.body.classList.add('overflowHide');
	}

	hideDetails() {
		this.setState({
			showDetails: false,
			popupData: {}
		});
		document.body.classList.remove('overflowHide');
	}

	render() {
		let imageUrl = window.location.href.indexOf('http://localhost:') > -1 ? `../src/` : `./dist/`;
		return (
			<section className="fullWidth">
				<ul>
					{
						athletes.map((item) =>
							<li key={item.id}>
								<img src={`${imageUrl}img/${item.image}`} alt={item.name} title={item.name} />
								<p>{item.name}</p>
								<div><img src={`${imageUrl}img/medal.png`} alt="Medals Won" title="Medals Won" />{item.medals.length}</div>
								<a href="#" onClick={() => this.showDetails(item.id)}></a>
							</li>
						)
					}
				</ul>
				{
					this.state.showDetails ? <AtheleteDetails data={this.state.popupData} hidePopupDetails={() => this.hideDetails()} imageUrl={imageUrl} /> : ''
				}
			</section>
		)
	}
}

export default Atheletes;