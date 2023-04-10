import PropTypes from 'prop-types';

import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const {
    profile,
    description,
    avatarImage,
    name,
    tagName,
    statistics,
    statsItem,
    label,
    quantity,
  } = css;
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="User avatar" className={avatarImage} />
        <p className={name}>{username}</p>
        <p className={tagName}>@{tag}</p>
        <p className={location}>{location}</p>
      </div>

      <ul className={statistics}>
        <li className={statsItem}>
          <span className={label}>Followers</span>
          <span className={quantity}>{stats.followers}</span>
        </li>
        <li className={statsItem}>
          <span className={label}>Views</span>
          <span className={quantity}>{stats.views}</span>
        </li>
        <li className={statsItem}>
          <span className={label}>Likes</span>
          <span className={quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
