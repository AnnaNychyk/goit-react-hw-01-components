import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function StatisticItem({ label, percentage }) {
  return (
    <div className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </div>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItem;
