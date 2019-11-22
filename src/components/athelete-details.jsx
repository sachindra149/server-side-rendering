import React, { Component } from 'react';
import Flag from './flag.jsx';

class AtheleteDetails extends Component {
	
	hidePopupDetails() {
		this.props.hidePopupDetails();
	}

	render() {
		const bgObj = {
			backgroundImage: `url('${this.props.imageUrl}img/${this.props.data.cover}')`,
			backgroundRepeat: 'no-repeat'
		}
		return (
			<div className="detailsPopup">
				<div className="detailsPopupContainer">
					<div className="detailsHeader fullWidth">
						<div className="detailsBanner" style={bgObj}>&nbsp;</div>
						<div className="detailsHeaderBlock">
							<div className="detailsHeaderImage">
								<img src={`${this.props.imageUrl}img/${this.props.data.image}`} alt={`${this.props.data.name}`} title={`${this.props.data.name}`} />
							</div>
							<div className="detailsHeaderName">{`${this.props.data.name}`}</div>
						</div>
					</div>
					<div className="fullWidth atheleteDetails">
						<h3>Olympic medalist from <Flag country={this.props.data.country} />, born in {this.props.data.birth} (Find out more on <a href={`${this.props.data.link}`} target="_blank" className="link">Wikipedia</a>).</h3>
						<h3>Winner of {this.props.data.medals.length} medals:</h3>
						<ul>
							{
								this.props.data.medals.map((item) => {
									let randomNumber = Math.floor(Math.random() * 100);
									return (
										<li key={`${item.city}-${item.event}-${item.year}-${randomNumber}`}>
											<span className={item.type}>{item.type}</span>
											{item.year} {item.city} - {item.event} ({item.category})
										</li>
									)
								})
							}
						</ul>
					</div>
					<a href="#" className="hideDetails" onClick={() => this.hidePopupDetails()}></a>
				</div>
			</div>
		)
	}
}

export default AtheleteDetails;