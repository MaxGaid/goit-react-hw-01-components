import PropTypes from 'prop-types';
import {
  UserBox,
  User,
  UserImg,
  UserName,
  UserInfo,
  Stats,
  StatsItem,
  StatsLbl,
  StatsQty,
} from 'components/Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserBox>
      <User>
        <UserImg src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </User>
      <Stats>
        <StatsItem>
          <StatsLbl>Followers</StatsLbl>
          <StatsQty>{followers}</StatsQty>
        </StatsItem>
        <StatsItem>
          <StatsLbl>Views</StatsLbl>
          <StatsQty>{views}</StatsQty>
        </StatsItem>
        <StatsItem>
          <StatsLbl>Likes</StatsLbl>
          <StatsQty>{likes}</StatsQty>
        </StatsItem>
      </Stats>
    </UserBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
