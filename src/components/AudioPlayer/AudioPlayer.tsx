import React, { useContext } from 'react';


//Components
import PlayControl	from './components/PlayControl';
import SongDisplay	from './components/SongDisplay';

//Styled components
import styled from 'styled-components';


const Container = styled.div({
	position: 'absolute',
	zIndex: 1,
	bottom: 0,
	width: '100vw',
	padding: '0.5em',
	boxShadow: '0 -0.25em 0.25em var(--gray)',
	height: '5em',

	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',

	'& > *': {
		zIndex: 2,
	}
});


//Main component content
const AudioPlayer = (): JSX.Element => {
	//Main component render
	return (
		<Container id='audio-player' >
			<SongDisplay />
			<PlayControl />
			<audio
				src={''}
				
			/>
		</Container>
	);
};


export default AudioPlayer; //Export main component
