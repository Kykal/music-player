import React from 'react';


//React Router Dom
import { Link } from 'react-router-dom';


//Styled components
import styled from 'styled-components';


const LinkSx = styled(Link)({
	display: 'flex',
	alignItems: 'center',	
	fontSize: '1.4em',
	letterSpacing: '0.125em',
	height: '100%',
});



//Main component content
const Logo = (): JSX.Element => {
	//Main component render
	return (
		<div id='home-link' >
			<LinkSx to='/'>
				Music Player
			</LinkSx>
		</div>
	);
};


export default Logo; //Export main component
