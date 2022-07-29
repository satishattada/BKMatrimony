import user from './../user.json'
const url = 'http://localhost:3004/';
export const apiHeaders = {
	'Content-Type': 'application/json',
  }
class UserService {

	loginUser = async (credentials) => {
		return fetch(url + 'login', {
			method: 'POST',
			headers: apiHeaders,
			body: JSON.stringify(credentials)
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);

		})
	}

	registerUser = async (userData) => {
		return fetch(url + 'register', {
			method: 'POST',
			headers: apiHeaders,
			body: JSON.stringify(userData)
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);

		})
	}

	updateUser = async (userData) => {
		return fetch(url + 'users/'+userData.id, {
			method: 'PUT',
			headers: apiHeaders,
			body: JSON.stringify(userData)
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);
		})
	}
	
	forgotPasswordUser = async (userData) => {
		return fetch(url + 'forgot-password', {
			method: 'POST',
			headers: apiHeaders,
			body: JSON.stringify(userData)
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);

		})
	}
	getUser = async () => {
		return new Promise(function (resolve, reject) {
			// fetch('https://mocki.io/v1/b68a5f90-99f3-4742-82e3-6fae626a16f3')
			fetch(url + 'user')
				.then(response => response.json())
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					return reject(error);
				});
		}).catch((error) => {
			return Promise.reject(error);
		});

	}

	getUsers = async (gender) => {
		return new Promise(function (resolve, reject) {
			fetch(url + 'users?gender='+gender)
				.then(response => response.json())
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					return reject(error);
				});
		}).catch((error) => {
			return Promise.reject(error);
		});

	}

	getCakes = async () => {
		return new Promise(function (resolve, reject) {
			// fetch('https://mocki.io/v1/b8909f0a-f883-4169-9db4-964afd678329')
			fetch(url + 'cakes')
				.then(response => response.json())
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					return reject(error);
				});
		}).catch((error) => {
			return Promise.reject(error);
		});

	}
}

export default new UserService();