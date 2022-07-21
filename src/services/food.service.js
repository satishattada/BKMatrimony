class FoodService {
	getFood = async () => {
		return new Promise(function (resolve, reject) {
			fetch('https://mocki.io/v1/b8909f0a-f883-4169-9db4-964afd678329')
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

export default new FoodService();