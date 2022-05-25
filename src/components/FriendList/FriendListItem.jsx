import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div className={styles.itemDiv}>
      {isOnline ? (
        <span className={styles.statusOn}>{isOnline}</span>
      ) : (
        <span className={styles.statusOff}>{isOnline}</span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
