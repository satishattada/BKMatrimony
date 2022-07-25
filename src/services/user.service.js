import user from './../user.json'
const url = 'http://localhost:3004/';
export const apiHeaders = {
	'Content-Type': 'application/json',
  }
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
			fetch(url + 'users'+1)
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


	updateUser = async () => {
		const userData = {
			"id": "1",
			"name": "Aparna Duggapu",
			"email": "aparnaduggapu@gmail.com",
			"phoneNumber": "07879799086",
			"age": "28 years",
			"height": "150cm - 5ft 3in",
			"location": "Visakhapatnam - Andhra Pradesh",
			"religion": "Hindu",
			"caste": "Kalinga",
			"motherTongue": "Telugu",
			"education": "B.Pharm",
			"gender": "Female",
			"college": "vignan institue",
			"working": "no",
			"settleDownAbroad": "yes",
			"workAfterMarriage": "yes",
			"countryOfResidence": "india",
			"gothram": "srivatshala",
			"manglik": "not known",
			"birth": "23-march-1991",
			"maritalStatus": "not specified",
			"timeOfBirth": "23hr-30m-3s"
		  }
		const requestOptions = {
			method: 'PUT',
			headers: apiHeaders,
			body: JSON.stringify(userData)
		}
		return new Promise(function (resolve, reject) {
			fetch(url + 'users/'+1, requestOptions)
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