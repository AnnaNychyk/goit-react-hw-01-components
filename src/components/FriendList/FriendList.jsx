import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li className="item" key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
};

export default FriendList;
