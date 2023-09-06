import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  color: #666;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: #666;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const StatsItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  color: #666;
  font-size: 14px;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;
