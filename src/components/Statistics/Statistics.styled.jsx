import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  text-align: center;
  background-color: #f3f3f3;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  color: #666;
  font-size: 14px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;
