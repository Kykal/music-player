import React from 'react';


//Icons
import { FiExternalLink } from 'react-icons/fi';


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

const Data = styled.div({
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	height: '100%',
	padding: '0.25em',
	paddingLeft: '0.6em',
});


const ParagraphSx = styled.p({
	flexGrow: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',

	'& a': {
		marginRight: '0.5em',
	},
	'&#song-name > *': {
		color: 'var(--strong-gray)',
	},
	'&#song-author > *': {
		color: 'var(--gray)',
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
			<Data id='song-data' >
				<ParagraphSx id='song-name' >
					<a href='https://pixabay.com/music/beats-mezhdunami-uncut-gems-1198/' target='_blank' rel='noopener' >
						Uncut Gems
					</a>
					<FiExternalLink />
				</ParagraphSx>
				<ParagraphSx id='song-author' >
					<a href='https://pixabay.com/users/mezhdunami-12153402/' target='_blank' rel='noopener' >
						Mezhdunami
					</a>
					<FiExternalLink />
				</ParagraphSx>
			</Data>
		</Container>
	);
};


export default SongDisplay; //Export main component
