import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
  state = {
      email: "",
      password: "",
      videoURL: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
    };
    
  componentDidMount() {
 
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if(res.status === 200 ){
             this.props.setUserState(res.data)
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
   
        <div id="block1" className='d-flex justify-content-center'>
        <Row>
          <Col size="12">
            <form>
            <h3>Sign In</h3>

              <div className="form-group">
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              </div>

              <div className="form-group">
                    <label>Password</label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="(required)"
                type="password"
              />
              </div>
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
             <Link to="/signup">
               <FormBtn> Signup </FormBtn>
             </Link>
            </form>
          </Col>
        
        </Row>
        <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
      </Container>
    );
  }
}

export default Login;