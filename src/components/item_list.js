import React, {Component} from 'react';

import ListItem from './list_item';


const ItemList = (props) => {

	//console.log(this.props.items);

	const listItems = props.items.map((item) => {

		return (
			<ListItem
				key={item.title}
				item={item}
				selectedItem={props.selectedItem}
				clickHandler={props.clickHandler}
			/>
		);

	});

  console.log(listItems);

	return (
		<div id="buynowbox">
			<div id="listitems">
				{listItems}
			</div>
			<div id="cta" onClick={props.clickHandler}>
				<div>BUY NOW</div>
			</div>
		</div>
	);

}

export default ItemList;