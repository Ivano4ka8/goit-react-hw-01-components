import FriendItem from 'components/FriendItem/FriendItem';
import PropTypes from 'prop-types';
import { FriendListEl } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListEl>
      {friends &&
        friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          );
        })}
    </FriendListEl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
