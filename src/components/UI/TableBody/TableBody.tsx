import React from 'react';


//Styled components
import styled from 'styled-components';


const TableBodySx = styled.tbody({
	display: 'table-row-group',
});


//Main component content
const TableBody = (props: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
	//Main component render
	return (
		<TableBodySx>
			{props.children}
		</TableBodySx>
	);
};


export default TableBody; //Export main component
