import React from 'react';


//Icons
import { BiPlay, BiPause } from 'react-icons/bi';


//Components
import IconButton from '../../UI/IconButton';


//Interface
interface IProps {
	toggleAudio: () => void;
	isPlaying: boolean;
}

//Main component content
const ToggleControl = (props: IProps): JSX.Element => {
	//Main component render
	return (
		<IconButton id='play-pause-button'
				onClick={props.toggleAudio}
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
	);
};


export default ToggleControl; //Export main component
