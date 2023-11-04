import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.animationWrap}>
      <span className={styles.animation}></span>
    </div>
  );
};

export default Loader;
