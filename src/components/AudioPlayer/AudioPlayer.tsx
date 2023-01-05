import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';


//Context
import CurrentSongContext from '../../contexts/CurrentSong/CurrentSongContext';


//Interfaces
interface IAudio {
	playingSong: HTMLAudioElement | null;
}

//Components
import AudioControl	from './components/AudioControl';
import PlayControl	from './components/PlayControl';
import SliderRange	from './components/SliderRange';
import SongDisplay	from './components/SongDisplay';


//Styled components
import styled from 'styled-components';
import parseSongUri from '../../utils/parseSongUri';


const Container = styled.div({
	position: 'absolute',
	bottom: 0,
	width: '100vw',
});


const AudioTrack = styled.div({
	width: '100%',
	'&:hover > progress': {
		height: '0.4em',
	},
});


const AudioTable = styled.div({
	padding: '0.5em',
	height: '5em',
	display: 'flex',
	'& div:is(#song-display, #song-controls, #song-volume)': {
		width: '33%',
	},


	'@media (max-width: 650px)': {
		'& div#song-display': {
			width: '70%',
		},
		'& div#song-controls': {
			width: '30%',
			justifyContent: 'flex-end',
		},
	}
});

//Main component content
const AudioPlayer = (): JSX.Element => {

	const isMobile = useMediaQuery({
		query: '(max-width: 650px)',
	});

	const currentSong = useContext(CurrentSongContext);
	const [ playingSong, setPlayingSong ] = useState<HTMLAudioElement | null>(null);


	//When track is now loaded
	useEffect( () => {
		playingSong?.play();
	}, [playingSong] );
	

	//When new track is requested
	useEffect( () => {
		playingSong?.pause();
		setPlayingSong(new Audio(parseSongUri(currentSong)));
	}, [currentSong.url] );

	//Main component render
	return (
		<Container id='audio-player' >
			<AudioTrack>
				<SliderRange
					audioSong={playingSong}
				/>
			</AudioTrack>
			{isMobile ? (
				<MobileLayout
					playingSong={playingSong}
				/>
			) : (
				<DesktopLayout
					playingSong={playingSong}
				/>
			)}
		</Container>
	);
};


export default AudioPlayer; //Export main component



const DesktopLayout = ({playingSong}: IAudio) => {
	return (
		<AudioTable>
			<SongDisplay />
				<PlayControl
					playingSong={playingSong}
				/>
				<AudioControl
					playingSong={playingSong}
				/>
		</AudioTable>
	);
}


const MobileLayout = ({playingSong}: IAudio) => {
	return (
		<AudioTable>
			<SongDisplay />
			<PlayControl
				playingSong={playingSong}
			/>
		</AudioTable>
	);
}
