import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function StatisticItem({ label, percentage }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItem;
