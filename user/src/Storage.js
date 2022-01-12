export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  };
  
  export const setLocalStorage = (key, value) => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  };
  
  export const removeLocalStorage = (key) => localStorage.removeItem(key);
  
  export const clearLocalStorage = () => localStorage.clear();