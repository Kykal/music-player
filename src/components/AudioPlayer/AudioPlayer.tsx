import React from 'react';


//Components
import PlayControl	from './components/PlayControl';
import SongDisplay	from './components/SongDisplay';
import SliderRange	from './components/SliderRange';


//Styled components
import styled from 'styled-components';


const Container = styled.div({
	position: 'absolute',
	bottom: 0,
	width: '100vw',
});


const AudioTrack = styled.div({
	width: '100%',
});


const AudioTable = styled.div({
	padding: '0.5em',
	height: '5em',
	display: 'flex',
	'& div:is(#song-display, #song-controls)': {
		width: '33%',
	}
}); 

//Main component content
const AudioPlayer = (): JSX.Element => {
	//Main component render
	return (
		<Container id='audio-player' >
			<AudioTrack>
				<SliderRange />
			</AudioTrack>
			<AudioTable>
				<SongDisplay />
				<PlayControl />
				<div>
					a
				</div>
			</AudioTable>
			<audio
				preload='metadata'
				src=''
			/>
		</Container>
	);
};


export default AudioPlayer; //Export main component
