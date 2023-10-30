import styles from './Loader.module.css';

const Loader = () => {
  console.log('memeory use');
  return (
    <div className={styles.animationWrap}>
      <span className={styles.animation}></span>
    </div>
  );
};

export default Loader;
