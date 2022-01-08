const form = document.getElementById('myForm');
const URL = 'ENTER YOUR ENDPOINT URL';

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const serialisedData = Object.fromEntries(formData);

	await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(serialisedData),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
});
