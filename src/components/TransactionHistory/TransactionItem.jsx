import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.rowBody}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
