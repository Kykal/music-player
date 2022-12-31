import React from 'react';


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
	padding: '0.75em',
	boxShadow: '0 -0.25em 0.25em var(--ultra-light-gray)',
	height: '5.5em',

	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	overflow: 'hidden',

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
			<div>
				a
			</div>
			<audio
				
			/>
		</Container>
	);
};


export default AudioPlayer; //Export main component
