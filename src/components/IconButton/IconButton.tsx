import React, { ReactNode, MouseEvent } from 'react';


//Styled components
import styled from 'styled-components';


const ButtonSx = styled.button({
	border: 'none',
	borderRadius: '50%',
	display: 'grid',
	placeItems: 'center',
	backgroundColor: 'transparent',
	transitionDuration: '125ms',
	padding: '1em',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: 'var(--ultra-light-gray)',
	},
	'&:active': {
		backgroundColor: 'var(--light-gray)',
	},
});


//Interfaces
interface IProps {
	children?: ReactNode;
	onClick?: () => void;
	id?: string;
}

//Main component content
const IconButton = (props: IProps): JSX.Element => {
	//Main component render
	return (
		<ButtonSx id={props.id}
			onClick={props.onClick}
		>
			{props.children}
		</ButtonSx>
	);
};


export default IconButton; //Export main component
