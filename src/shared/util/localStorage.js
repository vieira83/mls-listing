export const storage = {
  getItem: function(key) {
    const item = localStorage.getItem(key);

    try {
      item = JSON.parse(item);
    } catch (e) {}

    return item;
  },

  setItem: function(key, value) {
    localStorage.setItem(key, value);
  },

  removeItem: function(key) {
    localStorage.removeItem(key);
  }
};
