import PropTypes from 'prop-types';
import {
  FriendItemEl,
  FriendStatus,
  FriendImage,
  FriendName,
} from './FriendItem.styled';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <FriendItemEl>
      <FriendStatus status={isOnline.toString()}>{isOnline}</FriendStatus>
      <FriendImage src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItemEl>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
