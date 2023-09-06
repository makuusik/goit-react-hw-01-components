import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const AdditionalInfo = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;
