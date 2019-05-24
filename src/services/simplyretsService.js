import Api from '../shared/util/Api'

const API_ROOT_URL = 'https://api.simplyrets.com/'

export const simplyrets = {
  getAllProperties : () => {
    return Api.getAll(`${API_ROOT_URL}properties`)
  }
} 