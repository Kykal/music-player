import React from 'react';


//Styled components
import styled from 'styled-components';


//Interfaces
interface IProps {
	children: JSX.Element | JSX.Element[];
	isActive: boolean;
}

interface IRow {
	isActive: boolean;
}

const TableRowSx = styled.tr( (props: IRow) => ({
	display: 'table-row',
	background: props.isActive ? 'var(--ultra-light-gray)' : 'white',
	'&:hover': {
		backgroundColor: 'var(--ultra-light-gray)',
	},
}));

//Main component content
const TableRow = (props: IProps): JSX.Element => {
	//Main component render
	return (
		<TableRowSx isActive={props.isActive} >
			{props.children}
		</TableRowSx>
	);
};


export default TableRow; //Export main component
