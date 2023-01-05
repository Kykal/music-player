import React from 'react';


//React Router Dom
import { Link } from 'react-router-dom';


//Styled components
import styled from 'styled-components';


const Container = styled.div({
	gridColumn: '1/2',
});

const LinkSx = styled(Link)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	fontSize: '1.4em',
	letterSpacing: '0.125em',
	height: '100%',
	width: 'fit-content',
});



//Main component content
const Logo = (): JSX.Element => {
	//Main component render
	return (
		<Container id='home-link' >
			<LinkSx to='/'>
				Music Player
			</LinkSx>
		</Container>
	);
};


export default Logo; //Export main component
