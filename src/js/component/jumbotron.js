import React from "react";

const Jumbotron = () => {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">Hola, Mundo!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Aprende más aquí
				</a>
			</div>
		</div>
	);
};

export default Jumbotron;

// Jumbotron.propTypes = {
// title: PropTypes.string,
// description: PropTypes.string,
// buttonLabel: PropTypes.string,
// buttonURL: PropTypes.string

//};
