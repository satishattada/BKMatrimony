import user from './../user.json'

class UserService {
	getUser = async () => {
		return new Promise(function (resolve, reject) {
			fetch('https://mocki.io/v1/b8909f0a-f883-4169-9db4-964afd678329')
			// fetch('https://mocki.io/v1/b68a5f90-99f3-4742-82e3-6fae626a16f3')
			fetch('https://mocki.io/v1/0e0def11-8aae-4660-8802-79aefab7b015')
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
			fetch('https://mocki.io/v1/2e1c021a-9fc4-4a1c-8d2b-34070da724af')
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