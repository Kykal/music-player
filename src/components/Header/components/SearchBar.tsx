import React, { useState, ChangeEvent, FormEvent } from 'react';


//React Router Dom
import { useSearchParams } from 'react-router-dom';


//Styled components
import styled from 'styled-components';


const SearchForm = styled.form({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',


	gridColumn: '2/3',
});

const Input = styled.input({
	height: 'inherit',
	width: '20em',
	border: '0.125em solid rgba(0, 0, 0, 0.2)',
	borderRadius: '1em',
	textAlign: 'center',
	letterSpacing: '0.125em',

	'&::placeholder, &:focus': {
		textAlign: 'center',
		letterSpacing: '0.125em',
	},

	'&:focus': {
		outline: '0.125em solid rgba(0, 0, 0, 0.2)',
	},
});



//Main component content
const SearchBar = (): JSX.Element => {

	//React Router Dom
	const [ searchParams, setSearchParams ] = useSearchParams();

	//States
	const [ value, setValue ] = useState<string>('');

	//Description. What does this?
	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		setValue('');
		setSearchParams({
			'query': value.trim(),
		});
	};

	//Description. What does this?
	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	//Main component render
	return (
		<SearchForm id='search-bar' onSubmit={submitHandler} >
			<Input
				type="text"

				value={value}
				onChange={valueHandler}

				placeholder='Artist, album, etc.'
			/>
		</SearchForm>
	);
};


export default SearchBar; //Export main component
