import PropTypes from 'prop-types';
import styles from './InputFile.module.css';
const InputFile = ({ id, displayName }) => {
  return (
    <div className={styles.inputFileWrap}>
      <label htmlFor={id} className={styles.label}>
        {displayName}
      </label>
      <input
        type='file'
        id={id}
        accept='.png,.jpg'
        className={styles.inputFile}
      />
    </div>
  );
};
InputFile.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string,
  icon: PropTypes.node,
};
export default InputFile;
