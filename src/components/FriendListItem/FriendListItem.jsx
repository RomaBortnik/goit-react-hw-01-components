import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const {
    friendListItem,
    friendListStatus,
    friendListAvatar,
    friendListName,
    active,
  } = css;
  return (
    <li className={friendListItem}>
      <span className={clsx(friendListStatus, isOnline && active)}></span>
      <img
        className={friendListAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendListName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
