import FriendListItem from 'components/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FriendList;
