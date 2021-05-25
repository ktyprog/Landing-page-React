import React from "react";
import Card from "./cards";

const CardContainer = () => {
	return (
		<div className="row">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		</div>
	);
};

export default CardContainer;
