import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
