import axios from 'axios';

const apiUrl = process.env.MIX_API_URL;

export const params = {
  khans: "khans",
  houses: "houses",
  likes: "tableLikes",
  auth: 'authenticated'
};

const request = (param, callback, error) => {
  fetch(apiUrl + param)
  .then(res => {
	  if(res.status === 200)
		return res.json();
	  else error();
	})
  .then(callback)
  .catch(error);
}

const _request = (method, param, data, callback, error) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	fetch(apiUrl + param, options)
	.then(res => res.json())
	.then(callback)
	.catch(error);
}

export function getRequest(param, callback, error) {
	param && request(param, callback, error);
}

export function putRequest(param, data, callback, error) {
	param && _request("PUT", param, data, callback, error);
}

export function postRequest(param, data, callback, error) {
	param && _request("POST", param, data, callback, error);
}

export function auth(callback) {
	axios.get(params.auth).then(res => callback(res.data));
}