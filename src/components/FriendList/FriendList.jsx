import FriendItem from 'components/FriendItem/FriendItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
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
    </ul>
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
