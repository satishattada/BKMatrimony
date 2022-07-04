class MatchesService {
	getMatches = async () => {
		return new Promise(function (resolve, reject) {
			fetch('https://dummyjson.com/products/1')
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

export default new MatchesService();