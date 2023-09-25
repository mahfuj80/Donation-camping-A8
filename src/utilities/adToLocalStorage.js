const adToLocalStorage = (id) => {
  const getItemFromLocalStorage = () => {
    const storedItem = localStorage.getItem('card');
    if (storedItem) {
      return JSON.parse(storedItem);
    } else {
      return [];
    }
  };
  const setItemToLocalStorage = () => {
    const storedItem = getItemFromLocalStorage();
    const exist = storedItem.find((item) => item === id);
    if (exist) {
      return alert('already Exist');
    } else {
      storedItem.push(id);
      localStorage.setItem('card', JSON.stringify(storedItem));
      return alert('Successfully added');
    }
  };
  setItemToLocalStorage();
};
export default adToLocalStorage;
