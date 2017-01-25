import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ItemList from './components/item_list';



//App is all the other components' parent component!
class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			items: [
				{title: 'STANDARD EDITION'},
				{title: 'SILVER EDITION'},
				{title: 'GOLD EDITION'},
				{title: 'DIAMOND EDITION'},
				{title: 'PLATINUM EDITION'},
			],
			selectedItem: 'STANDARD EDITION',
			beenBought: null
		};
		//bind this to context of component
		this.clickHandler = this.clickHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	windowHandler() {
		console.log('windowHandler entered');

		if (!this.state.beenBought) {
			return (
				<div>
					<ItemList
						items={this.state.items}
						selectedItem={this.state.selectedItem}
						clickHandler={this.clickHandler}
					/>
				</div>
		)} else {
			return (
				<div id="buynowbox" className="successbox">
					<div className="chosen">
						{this.state.selectedItem}
					</div>
					<div className="thanks">
						THANK YOU!
					</div>
				</div>
			)
		}
		
	}

	clickHandler(event) {

		if (event.target.innerText==="BUY NOW") {
			this.setState({beenBought: this.state.selectedItem});
		} else {
			this.setState({selectedItem: event.target.innerText.toString()});
		}
	}

	render() {

		return (
			<div>
			{this.windowHandler()}
			</div>
		);
	}
}

//render to dom
ReactDOM.render(<App/>, document.querySelector('.buystuff'));