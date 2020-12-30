import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/Form";

function Comments({ username }) {
  // Setting our component's initial state
  const [comments, setComments] = useState([]);
  const [formObject, setFormObject] = useState({
    body: "",
    username: "",
  });

  // get input element ref for focus
  const titleInputElRef = useRef();

  // Load all comments and store them with setComments
  useEffect(() => {
    // set user after successful component mount
    setFormObject({
      body: "",
      username: "",
      username,
    });

    loadComments();

    // focus on titleInputEl if ref exists
    titleInputElRef.current.focus();
  }, [username]);

  // Loads all comments and sets them to comments
  function loadComments() {
    API.getComments()
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a comment from the database with a given id, then reloads comments from the db
  function deleteComment(id) {
    API.deleteComment(id)
      .then((res) => loadComments())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveComment method to save the comment data
  // Then reload comments from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.body) {
      API.saveComment({
        body: formObject.body,
        username: formObject.username,
      })
        .then(loadComments)
        .then(() =>
          setFormObject({
            body: "",
            username: "",
          })
        )
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Row>
        <Col size="md-12">
          <form>
            <Col size="sm-12">
              <ForwardRefInput
                ref={titleInputElRef}
                value={formObject.body}
                onChange={handleInputChange}
                name="body"
                placeholder="your comment here"
              />
            </Col>
            <FormBtn disabled={!formObject.body} onClick={handleFormSubmit}>
              Submit Comment
            </FormBtn>
          </form>
        </Col>
      </Row>
      ,
      <Row>
        <Col size="md-12">
          {comments.length ? (
            <Table>
              {comments.map((comment) => (
                <Tr key={comment._id}>
                  <Td>
                    <Link
                      to={"/comments/" + comment._id}
                      style={{ textAlign: "left", display: "block" }}
                    >
                      <strong>{comment.username}:</strong> {comment.body}
                    </Link>
                  </Td>
                  <Td>{comment.date}</Td>
                  <Td>
                    <DeleteBtn onClick={() => deleteComment(comment._id)} />
                  </Td>
                </Tr>
              ))}
            </Table>
          ) : (
            <h3> </h3>
          )}
        </Col>
      </Row>
      <Row>
        <Col size="">
          <div className="avatar-med m-4">
            <img
              className="avatar-img rounded-circle "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbx1lkjm3dPCtewBZITNkKDwzq5C0e61IQ&usqp=CAU"
            />
			<div class="p-title">In Progress</div>
          </div>
		  
        </Col>
	
        <Col size="">
          <div className="avatar-med m-4">
            <img
              className="avatar-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbx1lkjm3dPCtewBZITNkKDwzq5C0e61IQ&usqp=CAU"
            />
			<div class="p-title">Project 2</div>
          </div>
        </Col>
        <Col size="">
          <div className="avatar-med m-4">
            <img
              className="avatar-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbx1lkjm3dPCtewBZITNkKDwzq5C0e61IQ&usqp=CAU"
            />
			<div class="p-title">Project 3</div>
          </div>
        </Col>
        <Col size="">
          <div className="avatar-med m-4">
            <img
              className="avatar-img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbx1lkjm3dPCtewBZITNkKDwzq5C0e61IQ&usqp=CAU"
            />
			<div class="p-title">Project 4</div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Comments;
