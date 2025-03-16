export function setDataToLocalStorage(key, value) {
  try {
    const normolizedState = JSON.stringify(value);
    localStorage.setItem(key, normolizedState);
  } catch (error) {
    console.error(error);
  }
}

export function getDataLocalStorage(key) {
  try {
    const normolizedState = localStorage.getItem(key);
    return normolizedState === null ? undefined : JSON.parse(normolizedState);
  } catch (error) {
    console.error(error);
  }
}
