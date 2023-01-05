import React, { useState, ChangeEvent, useEffect } from 'react';



//Icons
import { HiSpeakerWave } from 'react-icons/hi2';

//Components
import IconButton from '../../UI/IconButton';


//Styled components
import styled			from 'styled-components';

const Container = styled.div({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
});


//Interfaces
interface IProps {
	audio: HTMLAudioElement | null;
	value: number;
	onChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
}


//Main component content
const AudioControl = (props: IProps): JSX.Element | null => {

	if (props.audio === null)
		return null;

	//Main component render
	return (
		<Container id='song-volume' >
			<input
				type="range"

				value={props.value}

				min={0}
				max={100}

				onChange={props.onChange}
			/>
			<IconButton >
				<HiSpeakerWave
					fontSize='1.5em'
					color='var(--strong-gray)'
				/>
			</IconButton>
		</Container>
	);
};


export default AudioControl; //Export main component
