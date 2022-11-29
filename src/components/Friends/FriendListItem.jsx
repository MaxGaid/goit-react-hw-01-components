import PropTypes from 'prop-types';
import { FriendSpan, FriendImg, FriendName } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendSpan isOnline={isOnline}></FriendSpan>
      <FriendImg src={avatar} alt="avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
