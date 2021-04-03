import React from 'react';
import axios from 'axios';
import SHA256 from 'crypto-js/sha256';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Validator from '../resources/Validator';

const Signup = class extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      username: '',
      name: '',
      lastname: '',
      password: '',
      email: '',
      toNextPage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    let { value } = target;
    if (name === 'password') {
      value = SHA256(value).toString();
    }
    this.setState({
      [name]: value,
    });
  }

  submitNewUser() {
    const {
      username, name, lastname, password, email,
    } = this.state;
    if (Validator(email)) {
      const newUser = {
        username, name, lastname, password, email, created_at: moment().format('YYYY/MM/DD'),
      };
      axios.post('/api/signup', newUser)
        .then((result) => {
          const { status } = result;
          if (status === 201) {
            this.setState({
              toNextPage: true,
            });
          }
          return null;
        });
    } else {
      alert('Email with invalid format');
    }
  }

  render() {
    const { toNextPage } = this.state;
    if (toNextPage) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="signup-container">
        <div className="signup-body">
          <div className="signup-title">
            <span>Sign Up Here</span>
          </div>
          <div className="signup-username">
            <input className="input-username" onChange={this.handleChange} name="username" placeholder="username" />
          </div>
          <div className="signup-name">
            <input className="input-name" onChange={this.handleChange} name="name" placeholder="name" />
          </div>
          <div className="signup-lastname">
            <input className="input-lastname" onChange={this.handleChange} name="lastname" placeholder="last name" />
          </div>
          <div className="signup-mail">
            <input className="input-mail" onChange={this.handleChange} name="email" placeholder="email" />
          </div>
          <div className="signup-password">
            <input className="input-password" onChange={this.handleChange} type="password" name="password" placeholder="password" />
          </div>
          <button type="submit" onClick={this.submitNewUser}>sign up</button>
        </div>
        <div className="log-in">
          <span>
            Have an account?
            <a href="log-in"> Click here</a>
          </span>
        </div>
      </div>
    );
  }
};

export default Signup;
