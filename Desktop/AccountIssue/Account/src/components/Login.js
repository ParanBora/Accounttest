import * as React from 'react'
import { Textfield } from '../modules/module'
import './test.css'
import { Link } from 'react-router-dom';
import { account} from './';

class Login extends React.Component {




  constructor(props) {
    super(props);
    this.state = {

      id: "start",
      pw: "1234"

    };
  }


  handleChangeId = (e) => {
    this.setState({ id: e.target.value });
  };

  handleChangePw = (e) => {
    this.setState({ pw: e.target.value });
  };

  handleSubmit = (e) => {
    if (account.id == this.state.id
      && account.pw == this.state.pw) {
    } else if (account.id == this.state.id) {
      e.preventDefault();
      alert("비밀번호 틀림")
    }else{
      e.preventDefault();
      alert("아이디나 비밀번호가 틀림")
    }

  };




  render() {

    return (
      <fieldset>
        <legend>Login</legend>

        <Textfield id="Login-id" context="ID : " placeholder = "ID"  onChange={this.handleChangeId} />
        <Textfield type="password" id="Login-pw" context="Password : " placeholder = "Password" onChange={this.handleChangePw} />
        <br />
        <Link to = '/Manage'>
        <input type="submit" value="Login" onClick={this.handleSubmit} />
        </Link>
                &nbsp;

        <Link to='/Signup'>
          <input type="submit" value="Sign up" />
        </Link>
      </fieldset>
    );




  }
}





export default Login;