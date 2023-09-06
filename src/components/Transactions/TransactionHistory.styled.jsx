import styled from 'styled-components';

export const TransactionHistoryContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f3f3f3;
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f3f3f3;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #e0e0e0;
`;
