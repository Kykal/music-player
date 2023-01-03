import React from 'react';


//Interfaces
interface IProps {
	children: string | JSX.Element | JSX.Element[];
	
	display?: string;
	alignItems?: string;
	justifyContent?: string;
	width?: string;
	style?: {},
}


//Styled components
import styled from 'styled-components';

const TableCellSx = styled.td( (props: IProps) => ({
	padding: '0.5em',
	height: '4em',
	verticalAlign: 'inherit',
	display: props.display || 'table-cell',
	alignItems: props.alignItems,
	justifyContent: props.justifyContent,
	width: props.width,
}));



//Main component content
const TableCell = (props: IProps): JSX.Element => {
	//Main component render
	return (
		<TableCellSx {...props} style={{...props.style}}>
			{props.children}
		</TableCellSx>
	);
};


export default TableCell; //Export main component
