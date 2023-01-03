import React from 'react';


//Styled components
import styled from 'styled-components';


const TableRowSx = styled.tr({
	display: 'table-row',
	'&:hover': {
		backgroundColor: 'var(--ultra-light-gray)',
	}
});

//Main component content
const TableRow = (props: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
	//Main component render
	return (
		<TableRowSx>
			{props.children}
		</TableRowSx>
	);
};


export default TableRow; //Export main component
