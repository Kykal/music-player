import React from 'react';


//Components
import Logo				from './components/Logo';
import SearchBar	from './components/SearchBar';

//Styled components
import styled from 'styled-components';


const HeaderSx = styled.header({
	position: 'relative',
	padding: '1em',
	height: '4em',
	boxShadow: '0 0.25em 0.25em var(--gray)',
	
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',

	'& > *':{
		height: '100%',
	}
});



//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<HeaderSx>
			<Logo />
			<SearchBar />
			<div />
		</HeaderSx>
	);
};


export default Header; //Export main component
