import React, { useState, useEffect, useContext } from 'react';


//Context
import CurrentSongContext from '../../contexts/CurrentSong/CurrentSongContext';


//Interfaces
interface IAudio {
	audio: HTMLAudioElement | null;
	isPlaying: boolean;
	current: number,
}

//Components
import PlayControl	from './components/PlayControl';
import SongDisplay	from './components/SongDisplay';
import SliderRange	from './components/SliderRange';


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
	'& div:is(#song-display, #song-controls)': {
		width: '33%',
	}
});

//Main component content
const AudioPlayer = (): JSX.Element => {

	const currentSong = useContext(CurrentSongContext);
	const [ song, setSong ] = useState<IAudio>({
		audio: null,
		isPlaying: false,
		current: 0,
	});

	useEffect( () => {
		if( !currentSong.name )
			return;
		
		const uri = `music/${parseSongUri(currentSong)}.mp3`;

		const newSong = new Audio(uri);
		
		song.audio?.pause();

		setSong({
			audio: newSong,
			isPlaying: true,
			current: 0,
		});
	}, [currentSong.name] );

	useEffect( () => {
		song.audio?.play();
	}, [song.audio] );

	//Description. What does this?
	const audioPlayStopHandler = () => {
		if( song.isPlaying ){
			song.audio?.pause();
			setSong({
				...song,
				isPlaying: false,
			});
			return;
		}

		song.audio?.play();
		setSong({
			...song,
			isPlaying: true,
		});
	};

	//Main component render
	return (
		<Container id='audio-player' >
			<AudioTrack>
				<SliderRange
					audioSong={song.audio}
				/>
			</AudioTrack>
			<AudioTable>
				<SongDisplay />
				<PlayControl
					audioPlayStopHandler={audioPlayStopHandler}
					isPlaying={song.isPlaying}
				/>
				<div>
					a
				</div>
			</AudioTable>
		</Container>
	);
};


export default AudioPlayer; //Export main component
