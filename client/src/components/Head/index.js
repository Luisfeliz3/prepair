import React from "react";
import useLogRender from "../../utils/useLogPath";

function Nav() {
	useLogRender();

	return (
		<nav>
			<h1 className='mt-0 ml-0 mb-auto text-dark p-4 pt-3 pl-3 row justify-content-center'>PREPAIR</h1>
		</nav>
	);
}

export default Nav;
