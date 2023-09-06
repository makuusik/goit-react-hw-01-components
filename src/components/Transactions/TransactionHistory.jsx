import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionHistoryContainer,
  TableHead,
  TableRow,
  TableCell,
  TableHeaderCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
