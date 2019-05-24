import { storage } from "./localStorage";

export default class Auth {
  static getUser = function() {
    let userId = storage.getItem("userId");
    if (userId) {
      return userId;
    }
    return this.setUser();
  };

  static setUser = () => {
    const randomId = Math.floor(Math.random() * 100000);
    storage.setItem("userId", randomId);
    return randomId;
  }
}