import React, {Component} from 'react';

const ListItem = (props) => {

  const prodSelecter = () => {
  	console.log('prodSelecter triggered!');
  	if (props.selectedItem==props.item.title) {
  		return (
  			<span className="star">&#10023;</span>
  		)
  	}
  }

	return (
		<div
			onClick={props.clickHandler}
			className={props.selectedItem==props.item.title ? "listitem selected" : "listitem"}
		>
			<span className="checkbox">
				{prodSelecter()}
			</span>
			<span className="product">
				<span>{props.item.title}</span>
			</span>
		</div>
	)

}

export default ListItem;