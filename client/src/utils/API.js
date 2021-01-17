import axios from "axios";

export default {

// New endpoint to get all projects from baseprojects model
getAllProjects: function() {
  console.log(axios.get("/api/getallprojects"));
  return axios.get("/api/getallprojects");
}


//Below is old

  // // Gets all comments
  // getComments: function() {
  //   return axios.get("/api/comments");
  // },
  // // Gets the comment with the given id
  // getComment: function(id) {
  //   return axios.get("/api/comments/" + id);
  // },
  // // Deletes the comment with the given id
  // deleteComment: function(id) {
  //   return axios.delete("/api/comments/" + id);
  // },
  // // Saves a comment to the database
  // saveComment: function(commentData) {
  //   return axios.post("/api/comments", commentData);
  // },
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });