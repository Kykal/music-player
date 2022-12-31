import React from 'react';


//Icons
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiPlay, BiPause } from 'react-icons/bi';


//Components
import IconButton	from '../../IconButton';


//Styled components
import styled			from 'styled-components';


const Container = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});


//Main component content
const PlayControl = (): JSX.Element => {
	//Main component render
	return (
		<Container>
			<IconButton>
				<AiFillStepBackward
					fontSize='1.75em'
					color='rgba(0, 0, 0, 0.75)'
				/>
			</IconButton>
			<IconButton>
				<BiPlay
					fontSize='2em'
					color='rgba(0, 0, 0, 0.75)'
				/>
			</IconButton>
			<IconButton>
				<AiFillStepForward
					fontSize='1.75em'
					color='rgba(0, 0, 0, 0.75)'
				/>
			</IconButton>
		</Container>
	);
};


export default PlayControl; //Export main component
