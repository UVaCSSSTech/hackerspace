import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class UserService{

	constructor(){}

	getUsersByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}

	getUser(pk) {
		const url = `${API_URL}/api/users/${pk}`;
		return axios.get(url).then(response => response.data);
	}

  createUser(user){
		const url = `${API_URL}/api/users/`;
		return axios.post(url,user);
	}

	deleteUser(user){
		const url = `${API_URL}/api/users/${user.pk}`;
		return axios.delete(url);
	}

	updateUser(user){
		const url = `${API_URL}/api/users/${user.pk}`;
		return axios.put(url,user);
	}
}
