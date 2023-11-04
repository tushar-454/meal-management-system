import styles from './Toast.module.css';
const Toast = (title, type) => {
  let status = null;
  if (type === 'success') {
    status = styles.success;
  } else if (type === 'error') {
    status = styles.error;
  } else if (type === 'info') {
    status = styles.info;
  } else if (type === 'warning') {
    status = styles.warning;
  }
  const root = document.getElementById('root');
  if (root.querySelector('.toast')) {
    return;
  }
  const toast = document.createElement('div');
  toast.classList = `toast ${styles.toast} ${status}`;
  const text = document.createElement('p');
  text.innerText = title || 'Custom Toast 😲';
  text.classList = `${styles.message}`;
  toast.appendChild(text);
  root.appendChild(toast);
  setTimeout(() => {
    toast.classList = `${styles.toast} ${status} ${styles.hideToast}`;
  }, 2000);
  setTimeout(() => {
    root.removeChild(toast);
  }, 2300);
};

export default Toast;
