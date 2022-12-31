import React, { useState, MouseEvent } from 'react';


//Styled components
import styled from 'styled-components';


const RangeInputSx = styled.progress({
	boxShadow: '0 -0.25em 0.25em var(--ultra-light-gray)',
	width: 'inherit',
	height: '0.25em',
	border: 'none',
	cursor: 'pointer',

	'&:hover': {
		height: '0.4em',
	},

	//Background color
	backgroundColor: 'var(--ultra-light-gray)',
	'&::-webkit-progress-bar': {
		backgroundColor: 'var(--ultra-light-gray)',
	},
	

	//Value color
	'&::-moz-progress-bar': {
		backgroundColor: 'var(--purple)',
	},
	'&::-webkit-progress-value': {
		backgroundColor: 'var(--purple)',
	},
});


//Main component content
const SliderRange = (): JSX.Element => {

	const maxSeconds = 13020;

	const [ value, setValue ] = useState<number>(400);

	//Updates value of progress tag
	const progressHandler = (event: MouseEvent) => {
		//Width of screen
		const width: number = event.currentTarget.scrollWidth;
		//Actual cursor position in x axis
		const x: number = event.clientX;

		//Relative
		const newValue = (x * maxSeconds)/width;

		setValue(newValue);
	};

	//Main component render
	return (
		<RangeInputSx
			value={value}
			max={maxSeconds}

			onClick={progressHandler}
		/>
	);
};


export default SliderRange; //Export main component
