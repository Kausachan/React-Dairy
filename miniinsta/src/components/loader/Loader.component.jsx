import React from 'react';
import './Loader.styles.scss';

const Loader = () => {
	return(
			<div className="loader">
			  <div className="loader__bar"></div>
			  <div className="loader__bar"></div>
			  <div className="loader__bar"></div>
			  <div className="loader__bar"></div>
			  <div className="loader__bar"></div>
			  <div className="loader__ball"></div>
			</div>
		)
}

export default Loader;