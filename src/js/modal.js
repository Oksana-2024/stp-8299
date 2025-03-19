import { getDataLocalStorage, setDataToLocalStorage } from './localStorage-api';
import { refs } from './refs';

window.onload = () => {
  const openCookies = () => {
    refs.modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  };

  const closeCookies = () => {
    refs.modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };

  if (getDataLocalStorage('cookies')) {
    return;
  }
  openCookies();

  const handleAccept = () => {
    setDataToLocalStorage('cookies', 'accept');
    closeCookies();
    refs.acceptBtn.removeEventListener("click", handleAccept);
  };
  const handleDecline = () => {
    setDataToLocalStorage('cookies', 'decline');
    closeCookies();
    refs.declineBtn.removeEventListener("click", handleDecline);
  };

  refs.acceptBtn.addEventListener("click", handleAccept);
  refs.declineBtn.addEventListener("click", handleDecline);
};
