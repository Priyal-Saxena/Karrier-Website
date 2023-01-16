import React, { useEffect, Fragment } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}

function ScrollToTop({ history, children }) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		};
	}, []);

	return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
