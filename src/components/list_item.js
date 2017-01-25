import React, {Component} from 'react';

const ListItem = (props) => {

  const prodSelecter = () => {
  	if (props.selectedItem==props.item.title) {
  		return (
  			<span className="star">&#10023;</span>
  		)
  	}
  }
  //ternary operator to pic className for styling
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