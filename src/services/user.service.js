import user from './../user.json'
const url = 'http://localhost:3004/';
class UserService {
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

	getUsers = async () => {
		return new Promise(function (resolve, reject) {
			// fetch('https://mocki.io/v1/b8909f0a-f883-4169-9db4-964afd678329')
			fetch(url + 'users')
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