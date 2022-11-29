import PropTypes from 'prop-types';
import { FriendList, FriendItem } from './Friends.styled';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
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
