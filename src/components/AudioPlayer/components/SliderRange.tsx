import React, { useState, MouseEvent, useContext, useEffect } from 'react';


//Styled components
import styled from 'styled-components';
import CurrentSongContext from '../../../contexts/CurrentSong/CurrentSongContext';


const RangeInputSx = styled.progress({
	boxShadow: '0 -0.25em 0.25em var(--ultra-light-gray)',
	width: 'inherit',
	height: '0.25em',
	border: 'none',
	cursor: 'pointer',

	//Background color
	backgroundColor: 'var(--ultra-light-gray)',
	'&::-webkit-progress-bar': {
		backgroundColor: 'var(--ultra-light-gray)',
	},
	

	//Value color
	'&::-moz-progress-bar, &::-webkit-progress-value': {
		backgroundColor: 'var(--purple)',
	},
	'&::-webkit-progress-value': {
		backgroundColor: 'var(--purple)',
	},
});


//Interfaces
interface IProps {
	audioSong: HTMLAudioElement | null,
}


//Main component content
const SliderRange = (props: IProps): JSX.Element => {

	const currentSong = useContext(CurrentSongContext);

	const [ life, setLife ] = useState<number>(0);

	useEffect( () => {
		setLife(0);
	}, [currentSong] );

	useEffect( () => {
		const interval = setInterval( () => {
			setLife(props.audioSong!.currentTime);
		}, 1_000 );

		return () => {
			clearInterval(interval);
		}
	}, [props.audioSong] );

	//Updates value of progress tag
	const progressHandler = (event: MouseEvent) => {
		//Width of screen
		const width: number = event.currentTarget.scrollWidth;
		//Actual cursor position in x axis
		const x: number = event.clientX;

		//Relative
		const newValue = (x * props.audioSong!.duration)/width;

		setLife(newValue);
		props.audioSong!.currentTime = newValue;
	};

	//Main component render
	return (
		<RangeInputSx
			value={life}
			max={`${props.audioSong?.duration}`}

			onClick={progressHandler}
		/>
	);
};


export default SliderRange; //Export main component
