import PropTypes from 'prop-types';
import styles from './InputFile.module.css';
const InputFile = ({ id, displayName, photoStatus, error, ...rest }) => {
  return (
    <>
      <div className={styles.inputFileWrap}>
        <label htmlFor={id} className={styles.label}>
          {displayName}
        </label>
        <input
          type='file'
          id={id}
          accept='.png,.jpg'
          className={styles.inputFile}
          {...rest}
        />
        <p className={styles.photoStatus}>{photoStatus}</p>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};
InputFile.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string,
  photoStatus: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};
export default InputFile;
