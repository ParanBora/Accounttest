import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Textfield } from '../modules/module'
import { Link } from 'react-router-dom';
import { account } from './';

function test(a) {
  if (a == "1") {
    alert("체크");

  }
}

let Checker = 0;

function checkId(id) {
  if (!id) {
    if (!Checker)
      alert("ID를 입력해주세요.");
    Checker = 1;
    return 1;

  }
  else return 0;
}

function checkPw(pw, pwcheck) {
  if (!pw) {
    if (!Checker)
      alert("비밀번호를 입력해주세요");
    Checker = 1;
    return 1;
  } else {
    if (pw == pwcheck) {
      account.pw = pw;
      return 0;
    } else {
      if (!Checker)
        alert("비밀번호가 다릅니다.")
      Checker = 1;
      return 2;
    }
  }

}

function checkName(name) {
  if (!name) {
    if (!Checker)
      alert("이름 칸이 비었습니다. 다시 입력 바랍니다.");
    Checker = 1;
    return 1;

  } else {
    return 0;
  }

}

function checkPhone(phone) {
  if (!phone) {
    if (!Checker)
      alert("연락처를 적어주세요. 필수 정보입니다.")
    Checker = 1;
    return 1;
  }
  else return 0;
}





class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      pwcheck: "",
      name: "",
      address: "",
      phone: "",
      birthdate: "",
      sex: ""
    };
  }

  handleSubmit = (e) => {

    if (!(checkId(this.state.id) +
      checkPw(this.state.pw, this.state.pwcheck) +
      checkName(this.state.name) +
      checkPhone(this.state.phone))
    ) {
      account.id = this.state.id;
      account.pw = this.state.pw;
      account.name = this.state.name;
      account.address = this.state.address;
      account.phone = this.state.phone;
      account.birthdate = this.state.birthdate;
      account.sex = this.state.sex;
      alert("환영합니다! " + account.name);
    }
    else
      e.preventDefault();
    Checker = 0;
  };







  render() {


    return (
      <fieldset>
        <legend>Sign up
          </legend>

        <Textfield id="Signup-id" context="아이디 : " placeholder="아이디" onChange={(e) => this.setState({ id: e.target.value })} />
        <br />
        <Textfield type="password" id="Signup-Pw" context="비밀번호 : " placeholder="비밀번호" onChange={(e) => this.setState({ pw: e.target.value })} />
        <Textfield type="password" id="Signup-Pwcheck" context="비번확인 : " placeholder="비밀번호 확인" onChange={(e) => this.setState({ pwcheck: e.target.value })} />
        <br />
        <Textfield id="Signup-Name" context="이름: " placeholder="이름" onChange={(e) => this.setState({ name: e.target.value })} />
        <br />

        <Textfield id="Signup-Address" context="주소: " placeholder="ex) 경상북도 울릉군" onChange={(e) => this.setState({ address: e.target.value })} />
        <Textfield id="Signup-Phone" context="휴대폰: " placeholder="ex) 010-1234-5678" onChange={(e) => this.setState({ phone: e.target.value })} />

        <label id="BirthDate">생년월일: </label>
        <input type="date" name="Signup-Birthdate" onChange={(e) => this.setState({ birthdate: e.target.value })} />
        <br />

        <div onChange={(e) => this.setState({ pw: e.target.value })}>
          <label id="Sex">성별: </label>
          <input type="radio" name="Signup-Sex" value="Male" />남
            <input type="radio" name="Signup-Sex" value="Female" />여
          </div>
        <br />

            &nbsp;
        <Link to='/Manage'>
          <input type="submit" value="Sign up" onClick={this.handleSubmit} />
        </Link>
            &nbsp;
        <Link to='/'>
          <input type="submit" value="Back to the Login" />
        </Link>

      </fieldset>



    );
  }
}

export default Signup;

/* */