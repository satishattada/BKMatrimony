
async function getUser() {
	const response = await fetch(
		'./../user.json' // endpoint url
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`); // handle errors
	}
	const data = await response.json(); // response

    console.log('{{{{{{{{{{{{{data}}}}}}}}}}}}}');
    console.log(data);

}