import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id}>
          <Status isOnline={isOnline} />
          <Avatar src={avatar} alt={`Avatar of ${name}`} />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
