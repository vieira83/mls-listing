const getHeaders = () => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("simplyrets:simplyrets")
    }
  };
};

 export default class Api {
    static getAll = url => {
      return fetch(url, getHeaders())
      .then(res =>
        res.json()
      );
    }
}