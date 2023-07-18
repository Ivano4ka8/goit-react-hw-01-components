import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  UserInformationWrapper,
  UserAvatar,
  UserName,
  UserInformation,
  UserStatisticList,
  UserStatisticItem,
  UserStatiscticText,
} from './Profile.styled';

export default function Profile({
  userInfo: { username, tag, location, avatar },
  stats: { followers, views, likes },
}) {
  return (
    <ProfileWrapper>
      <UserInformationWrapper>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInformation>{tag}</UserInformation>
        <UserInformation>{location}</UserInformation>
      </UserInformationWrapper>

      <UserStatisticList>
        <UserStatisticItem>
          <UserStatiscticText>Followers</UserStatiscticText>
          <UserStatiscticText>{followers}</UserStatiscticText>
        </UserStatisticItem>
        <UserStatisticItem>
          <UserStatiscticText>Views</UserStatiscticText>
          <UserStatiscticText>{views}</UserStatiscticText>
        </UserStatisticItem>
        <UserStatisticItem>
          <UserStatiscticText>Likes</UserStatiscticText>
          <UserStatiscticText>{likes}</UserStatiscticText>
        </UserStatisticItem>
      </UserStatisticList>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
