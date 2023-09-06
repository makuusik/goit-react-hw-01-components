import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListContainer,
  FriendListItem,
  Status,
  Avatar,
  Name,
  AdditionalInfo,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status isOnline={friend.isOnline} />
          <Avatar src={friend.avatar} alt={friend.name} />
          <div>
            <Name>{friend.name}</Name>
            <AdditionalInfo>
              {friend.isOnline ? 'Online' : 'Offline'}
            </AdditionalInfo>
          </div>
        </FriendListItem>
      ))}
    </FriendListContainer>
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
