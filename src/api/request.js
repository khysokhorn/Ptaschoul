export const params = {
  khans: "khans"
};

const request = (param, callback) => {
  fetch('http://localhost:3001/' + param)
  .then(res => res.json())
  .then(callback)
  .catch();
}

export function getRequest(param, callback) {
	switch(param) {
    case params.khans: request(param, callback);
    break;
    default: return null;
  }
}