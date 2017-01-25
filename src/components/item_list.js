import React, {Component} from 'react';

import ListItem from './list_item';


const ItemList = (props) => {

	const listItems = props.items.map((item) => {
		//return component list of items, pass in product & props
		return (
			<ListItem
				key={item.title}
				item={item}
				selectedItem={props.selectedItem}
				clickHandler={props.clickHandler}
			/>
		);

	});

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