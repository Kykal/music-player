import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';


//Interfaces
import ISong from '../../interfaces/ISong';


//Constants
import { DUMMY_THUMBNAIL_URL } from '../../constants';


//Components
import Table			from '../../components/UI/Table';
import TableBody	from '../../components/UI/TableBody';
import TableCell	from '../../components/UI/TableCell';
import TableRow		from '../../components/UI/TableRow';


//Styled components
import styled from 'styled-components';
import CurrentSongContext from '../../contexts/CurrentSong/CurrentSongContext';

const Container = styled.main({
	paddingTop: '3em',
	marginLeft: '20%',
	marginRight: '20%',
	paddingLeft: '2em',
	paddingRight: '2em',
	
	'@media screen and (max-width: 650px)': {
		marginLeft: '0',
		marginRight: '0',
		paddingLeft: '0.75em',
		paddingRight: '0.75em',
	},
});

const SongsListTitle = styled.h4({
	color: 'var(--gray)',
	letterSpacing: '0.075em',
	paddingBottom: '0.25em',
});

const Thumbnail = styled.img({
	width: 'auto',
	height: '100%',
	cursor: 'pointer',
});

//Main component content
const HomePage = (): JSX.Element => {

	const [ songsList, setSongsList ] = useState([]);

	const currentSong = useContext(CurrentSongContext);


	useEffect( () => {
		axios.get('data.json')
			.then( (response) => {
				setSongsList(response.data);
			} )
			.catch( (error) => {
				console.error( 'Could not fetch data:', error.code );
			} );
	}, [] );


	//Main component render
	return (
		<Container>
			<SongsListTitle>
				Available songs
			</SongsListTitle>
			<Table>
				<TableBody>
					{songsList.map( (song: ISong, index: number) => (
						<TableRow key={index} isActive={currentSong.id == song.id} >
							<TableCell>
								<Thumbnail
									src={song.thumbnailUrl ?? DUMMY_THUMBNAIL_URL}
									alt={song.album.name!}

									onClick={() => currentSong.setCurrentSongId(`${song.id}`)}
								/>
							</TableCell>
							<TableCell >
								{song.name!}
							</TableCell>
							<TableCell >
								{song.author.name!}
							</TableCell>
						</TableRow>
					) )}
				</TableBody>
			</Table>
		</Container>
	);
};


export default HomePage; //Export main component
