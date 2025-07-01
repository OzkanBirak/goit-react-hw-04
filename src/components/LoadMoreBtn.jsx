import styles from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.btnWrapper}>
      <button onClick={onClick} className={styles.button}>
        Daha Fazla Yükle
      </button>
    </div>
  );
};
