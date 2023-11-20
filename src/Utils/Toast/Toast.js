import styles from './Toast.module.css';
import error from './toastIco/cancel.png';
import info from './toastIco/info.png';
import success from './toastIco/success.png';
import warning from './toastIco/warning.png';
const Toast = (title, type) => {
  let status = null;
  let imagePath = null;
  if (type === 'success') {
    status = styles.success;
    imagePath = success;
  } else if (type === 'error') {
    status = styles.error;
    imagePath = error;
  } else if (type === 'info') {
    status = styles.info;
    imagePath = info;
  } else if (type === 'warning') {
    status = styles.warning;
    imagePath = warning;
  }
  const root = document.getElementById('root');
  // if (root.querySelector('.toast')) {
  //   return;
  // }
  const toast = document.createElement('div');
  toast.classList = `toast ${styles.toast} ${status}`;
  const text = document.createElement('p');
  text.innerText = title || 'Custom Toast 😲';
  text.classList = `${styles.message}`;
  const img = document.createElement('img');
  img.setAttribute('src', imagePath);
  toast.appendChild(img);
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
