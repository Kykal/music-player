import React from 'react';


//React Router Dom
import { Outlet } from 'react-router-dom';



//Main component content
const HomePage = (): JSX.Element => {
	//Main component render
	return (
		<>
			<Outlet />
		</>
	);
};


export default HomePage; //Export main component
