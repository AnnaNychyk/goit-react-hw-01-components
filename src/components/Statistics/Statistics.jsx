import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className="title">Upload stats</h2>
      <ul className={styles.statList}>
        {stats.map((item) => (
          <li className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  username: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
