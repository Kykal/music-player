import React from 'react';


//Styled components
import styled from 'styled-components';

const TableSx = styled.table({
	width: '100%',
	borderSpacing: 0,
	borderCollapse: 'collapse',
});


//Main component content
const Table = (props: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
	//Main component render
	return (
		<TableSx>
			{props.children}
		</TableSx>
	);
};


export default Table; //Export main component
