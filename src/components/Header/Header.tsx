import React from 'react';
import { useMediaQuery } from 'react-responsive';


//Components
import Logo				from './components/Logo';
import SearchBar	from './components/SearchBar';


//Styled components
import styled from 'styled-components';


const HeaderSx = styled.header({
	position: 'relative',
	padding: '1em',
	height: '4em',
	boxShadow: '0 0.25em 0.25em var(--ultra-light-gray)',
	
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',

	'& > *':{
		height: '100%',
	},

	'@media (max-width: 650px)': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});



//Main component content
const Header = (): JSX.Element => {

	const isMobile = useMediaQuery({
		query: '(max-width: 650px)',
	});

	//Main component render
	return (
		<HeaderSx>
			{!isMobile && <Logo />}
			<SearchBar />
			{!isMobile && <div />}
		</HeaderSx>
	);
};


export default Header; //Export main component
