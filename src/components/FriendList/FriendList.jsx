import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item">
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default FriendList;
