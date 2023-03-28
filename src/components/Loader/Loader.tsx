import styles from './style.module.scss';

const Loader = () => {
  return (
    <div className={styles['main-loader']}>
      <div className={styles.boxes}>
        {Array.from({ length: 4 }, (el, ind) => (
          <div className={styles.box} key={ind}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
