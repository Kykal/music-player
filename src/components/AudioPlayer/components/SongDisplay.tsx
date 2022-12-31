import React from 'react';



//Styled components
import styled from 'styled-components';


const Container = styled.div({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
});

const Thumbnail = styled.div({
	height: '64px',
	width: '64px',
	boxShadow: '0 0 0.5em 0.125em rgba(0, 0, 0, 0.2)',
	'& > img': {
		height: '100%',
		width: 'auto',
		objectFit: 'contain',
	},
});

//Main component content
const SongDisplay = (): JSX.Element => {
	//Main component render
	return (
		<Container id='song-display' >
			<Thumbnail id='song-thumbnail' >
				<img
					src="https://cdn.pixabay.com/audio/2022/09/19/20-13-28-716_200x200.jpg"
					alt="thumbnail"
				/>
			</Thumbnail>
		</Container>
	);
};


export default SongDisplay; //Export main component
