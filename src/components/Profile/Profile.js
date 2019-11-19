import React from 'react';
import Proppes from 'prop-types';
import abc from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={abc.profile}>
    <div className={abc.description}>
      <img src={user.avatar} alt="user avatar" className={abc.avatar} />
      <p className={abc.name}>{user.name}</p>
      <p className={abc.tag}>@{user.tag}</p>
      <p className={abc.location}>{user.location}</p>
    </div>

    <ul className={abc.stats}>
      <li className={abc.statsLi}>
        <span className={abc.label}>Followers</span>
        <span className={abc.quantity}>{user.stats.followers}</span>
      </li>
      <li className={abc.statsLi}>
        <span className={abc.label}>Views</span>
        <span className={abc.quantity}>{user.stats.views}</span>
      </li>
      <li className={abc.statsLi}>
        <span className={abc.label}>Stats</span>
        <span className={abc.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: Proppes.shape({
    name: Proppes.string,
    tag: Proppes.string,
    location: Proppes.string,
    avatar: Proppes.string,
    stats: Proppes.shape({
      followers: Proppes.number,
      views: Proppes.number,
      likes: Proppes.number,
    }).isRequired,
  }).isRequired,
};

export default Profile;
