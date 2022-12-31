import React from 'react';


//React Router Dom
import { Link } from 'react-router-dom';


//Styled components
import styled from 'styled-components';


const LogoSx = styled(Link)({
	fontSize: '1.4em',
	letterSpacing: '0.125em',
	color: 'rgba(0, 0, 0, 0.5)',
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
});



//Main component content
const Logo = (): JSX.Element => {
	//Main component render
	return (
		<LogoSx to='/' >
			Music Player
		</LogoSx>
	);
};


export default Logo; //Export main component
