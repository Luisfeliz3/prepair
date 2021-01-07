import axios from "axios";

export default {
  // Gets all comments
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Gets the comment with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the comment with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
};

// Note: This API costs money! Test sparingly:
  // Requests: $0.005 / use
  // Results: $1e-8 / use
// Endpoint information can be found here:
  // https://rapidapi.com/a.rachitskiy/api/sku-io/endpoints

// Test API function
const options = {
  method: 'GET',
  url: 'https://sku-io.p.rapidapi.com/request',
  params: {param: 'drill', store: 'HOMEDEPOT', function: 'getSearch'},
  headers: {
    'x-rapidapi-key': '6a6c93e695msh75b8b667572cb64p157cf7jsnea4fbc5808b0',
    'x-rapidapi-host': 'sku-io.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});