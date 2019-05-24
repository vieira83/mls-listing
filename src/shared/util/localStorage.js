export const storage = {
  getItem: function(key) {
    let item = localStorage.getItem(key);

    try {
      item = JSON.parse(item);
    } catch (e) {}

    return item;
  },

  setItem: function(key, value) {
    localStorage.setItem(key, value);
  }
};
