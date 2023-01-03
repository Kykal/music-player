import React from 'react';


//Icons
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiPlay, BiPause } from 'react-icons/bi';


//Components
import IconButton	from '../../UI/IconButton';


//Styled components
import styled			from 'styled-components';


const Container = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});


//Interfaces
interface IProps {
	isPlaying: boolean;
	audioPlayStopHandler: () => void;
}

//Main component content
const PlayControl = (props: IProps): JSX.Element => {
	//Main component render
	return (
		<Container id='song-controls' >
			<IconButton id='backwards-button'
				disabled={true}
			>
				<AiFillStepBackward
					fontSize='1.75em'
					color='rgba(0, 0, 0, 0.75)'
				/>
			</IconButton>
			<IconButton id='play-pause-button'
				onClick={props.audioPlayStopHandler}
			>
				{props.isPlaying ? (
					<BiPause
						fontSize='2.5em'
						color='rgba(0, 0, 0, 0.75)'
					/>
				) : (
					<BiPlay
						fontSize='2.5em'
						color='rgba(0, 0, 0, 0.75)'
					/>
				)}
			</IconButton>
			<IconButton id='forward-button'
				disabled={true}
			>
				<AiFillStepForward
					fontSize='1.75em'
					color='rgba(0, 0, 0, 0.75)'
				/>
			</IconButton>
		</Container>
	);
};


export default PlayControl; //Export main component
