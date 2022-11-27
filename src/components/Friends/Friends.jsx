import PropTypes from 'prop-types';
import {
  FriendList,
  FriendItem,
  FriendSpan,
  FriendImg,
  FriendName,
} from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, status, avatar, name }) => (
        <FriendItem key={id}>
          <FriendSpan>{status}</FriendSpan>
          <FriendImg src={avatar} alt="avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
