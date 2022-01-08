# Fetch Api with Post Method


- This is a basic example about **How to use** *Javascript fetch Api* **with POST Method**.


### Steps: 

1. First get the URL for the API to send the data. Paste it here in the code.

`const URL = 'ENTER YOUR ENDPOINT URL'`

You can obtain an endpoint for HTTP request from **Hookbin**[https://hookbin.com/].


2. Get the form element using Javascript DOM manipulation method and then parse that data into an object as follows:

`const formData = new FormData(form)
const serialisedData = Object.fromEntries(formData)`

3. Now use Fetch Api as follows for the post method:

```
fetch(URL, {
		method: 'POST',
		body: JSON.stringify(serialisedData),
		headers: {
			'Content-Type': 'application/json'
		}
```

