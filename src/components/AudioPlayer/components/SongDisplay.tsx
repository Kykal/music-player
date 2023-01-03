import React, { useContext } from 'react';


//Context
import CurrentSongContext from '../../../contexts/CurrentSong/CurrentSongContext';


//Icons
import { FiExternalLink } from 'react-icons/fi';


//Styled components
import styled from 'styled-components';
import { DUMMY_THUMBNAIL_URL } from '../../../constants';


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

	const currentSong = useContext(CurrentSongContext);

	//Main component render
	return (
		<Container id='song-display' >
			<Thumbnail id='song-thumbnail' >
				<img
					src={currentSong.thumbnailUrl || DUMMY_THUMBNAIL_URL}
					alt="thumbnail"
				/>
			</Thumbnail>
			<Data id='song-data' >
				<ParagraphSx id='song-name' >
					<a href={`${currentSong.url}`} target='_blank' rel='noopener' >
						{currentSong.name}
					</a>
					<FiExternalLink />
				</ParagraphSx>
				<ParagraphSx id='song-author' >
					<a href={`${currentSong.author.url}`} target='_blank' rel='noopener' >
						{currentSong.author.name}
					</a>
					<FiExternalLink />
				</ParagraphSx>
			</Data>
		</Container>
	);
};


export default SongDisplay; //Export main component
