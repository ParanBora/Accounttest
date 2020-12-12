import * as React from 'react'
import { account } from './'
import { Textfield, TextInTheBox } from '../modules/'
import { Link } from 'react-router-dom';





class Pinf extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      choice: ""
    }
  }

  handleModify = (e) => {

    this.setState({ choice: e.target.name });
  }

  render() {
    if (!this.state.choice) {
      return (
        <div>
          <fieldset>
            <legend>
              Personal Info
            </legend>

            <div>
              <div>아이디: 1 </div>
              <br />
            </div>

            <TextInTheBox context="비밀번호" name="비밀번호" value="비밀번호 변경" onClick={this.handleModify} />
            <TextInTheBox name="이름" context={"이름 : " + account.name} value="수정" onClick={this.handleModify} />
            <TextInTheBox name="휴대전화" context={"휴대전화 : " + account.phone} value="수정" onClick={this.handleModify} />
            <TextInTheBox name="성별" context={"성별 : " + account.sex} value="수정" onClick={this.handleModify} />
            <TextInTheBox name="생년월일" context={"생년월일 : " + account.birthdate} value="수정" onClick={this.handleModify} />
            <TextInTheBox name="주소" context={"주소 : " + account.address} value="수정" onClick={this.handleModify} />

            <Link to='/Manage'>
              <input type="submit" value="돌아가기" action='/Manage' />
            </Link>

          </fieldset>
        </div>
      );
    } else {

      return (
        <Pinf_list modify={this.state.choice} />
      );
    }
  }
}


class Pinf_list extends React.Component {

  render() {

    switch (this.props.modify) {
      case "비밀번호":
        return <Pinf_Pw />;

      case "이름":
        return <Pinf_Name />;

      case "휴대전화":
        return <Pinf_Phone />;

      case "성별":
        return <Pinf_Sex />;

      case "생년월일":
        return <Pinf_Birthdate />;

      case "주소":
        return <Pinf_Address />;

      default:
        return alert("입력값 오류니까 고치고 와라.");
    }
  }
}




class Pinf_Id extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""

    }
  }
}

class Pinf_Pw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pw: "",
      pwcheck: "",

      phase: 0
    }
  }

  handleCheckPw = (e) => {
    if (account.pw != this.state.pw) {
      alert("비밀번호가 다릅니다.")
      e.preventDefault();
    } else
      this.setState({ phase: 1 });

  }

  handleSubmitPw = (e) => {

    if (!this.state.pw) {
      alert("비밀번호를 입력해주세요");
      e.preventDefault();
    }else{
      if (this.state.pw == this.state.pwcheck) {
        account.pw = this.state.pw;
        alert("처리 되었으니 나가 봐라.");
        this.setState({ phase: 2 });
      } else {
        alert("비밀번호가 다릅니다.")
        e.preventDefault();
      }
    }
  }

  render() {


    if (this.state.phase == 0)
      return (

        <fieldset>
          <Textfield type="password" id="Modify-pw" context="현재 비밀번호 : " onChange={(e) => this.setState({ pw: e.target.value })} />
          <br />

          <input type="submit" value="돌아가기" onClick={() => this.setState({ phase: 2 })} />

       &nbsp;

          <input type="submit" value="확인" onClick={this.handleCheckPw} />

        </fieldset>
      );
    if (this.state.phase == 1)
      return (
        <fieldset>
          <div>
            <Textfield type="password" id="Modify-pw" context="새 비밀번호 : " onChange={(e) => (this.setState({ pw: e.target.value }))} />
            <Textfield type="password" id="Modify-pwcheck" context="새 비밀번호 확인 : " onChange={(e) => this.setState({ pwcheck: e.target.value })} />
            <br />

            <input type="submit" value="돌아가기" onClick={() => this.setState({ phase: 3 })} />

        &nbsp;

              <input type="submit" value="수정" onClick={this.handleSubmitPw} />
          </div>
        </fieldset>
      );
    else {

      return (<Pinf />);
    }

  }
}

class Pinf_Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",

      phase: 0
    }
  }

  handleSubmitName = (e) => {
    if (!this.state.name) {
      alert("이름 칸이 비었습니다. 다시 입력 바랍니다.");
      e.preventDefault();

    } else {
      this.setState({ phase: 1 });
      account.name = this.state.name;
      alert("변경되었습니다.");
    }
  }

  render() {
    if (this.state.phase == 1)
      return <Pinf />;
    return (
      <fieldset>
        <div>
          <Textfield id="Modify-name" context="새 이름 : " onChange={(e) => (this.setState({ name: e.target.value }))} />
          <br />

          <input type="submit" value="돌아가기" onClick={(e) => this.setState({ phase : 1 })}/>

          &nbsp;
          <input type="submit" value="수정" onClick={this.handleSubmitName} />
        </div>
      </fieldset>
    );
  }
}

class Pinf_Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      phase: 0
    }
  }

  handleSubmitAddress = (e) => {
    this.setState({ phase: 1 });
    account.address = this.state.address;
    alert("변경되었습니다.");
  }
  render() {
    if (this.state.phase == 1)
      return <Pinf />;
    return (
      <fieldset>
        <div>
          <Textfield id="Modify-address" context="주소 : " onChange={(e) => (this.setState({ address: e.target.value }))} />
          <br />
          <br />
          <Link to="/PersonalInfo" >
            <input type="submit" value="돌아가기" onClick={(e) => this.setState({ phase : 1 })} />
          </Link>
          &nbsp;
          <input type="submit" value="수정" onClick={this.handleSubmitAddress} />
        </div>
      </fieldset>
    );
  }
}

class Pinf_Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",

      phase: 0
    }
  }

  handleSubmitPhone = (e) => {
    this.setState({ phase: 1 });
    account.phone = this.state.phone;
    alert("변경되었습니다.");
  };

  render() {
    if (this.state.phase == 1)
      return <Pinf />;
    return (
      <fieldset>
        <div>
          <Textfield id="Modify-phone" context="휴대전화 : " placeholder="010-1234-5678" onChange={(e) => (this.setState({ phone: e.target.value }))} />
          <br />
          <Link to="/PersonalInfo" >
            <input type="submit" value="돌아가기" onClick={(e) => this.setState({ phase : 1 })} />
          </Link>
          &nbsp;
          <input type="submit" value="수정" onClick={this.handleSubmitPhone} />
        </div>
      </fieldset>
    );
  }
}

class Pinf_Birthdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: "",

      phase : 0
    }
  }

  handleSubmitBirthdate = (e) => {
    this.setState({ phase: 1 });
    account.birthdate = this.state.birthdate;
    alert("변경되었습니다.");
  };

  render() {
    if (this.state.phase == 1)
      return <Pinf />;
    return (
      <fieldset>
        <div>
          <label id="Modify-birthdate">생년월일 : </label>
          <input type="date" name="Modify-birthdate" onChange={(e) => (this.setState({ birthdate: e.target.value }))} />
          <br />
          <br />
          <input type="submit" value="돌아가기" onClick={(e) => this.setState({ phase : 1 })}/>
          &nbsp;
          <input type="submit" value="수정" onClick={this.handleSubmitBirthdate} />
        </div>
      </fieldset>
    );
  }

}

class Pinf_Sex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "",

      phase : 0
    }
  }

  handleSubmitSex = (e) => {
    this.setState({ phase: 1 });
    account.sex = this.state.sex;
    alert("변경되었습니다.");
  };

  render() {
    if (this.state.phase == 1)
      return <Pinf />;
    return (
      <fieldset>
        <div onChange={(e) => (this.setState({ sex: e.target.value }))}>
          <label id="Modify-sex">성별 : </label>
          <input type="radio" name="Modify-sex" value="Male" />남
          <input type="radio" name="Modify-sex" value="Female" />여
        </div>
        <br />
        <div>
          <Link to="/PersonalInfo" >
            <input type="submit" value="돌아가기" onClick={(e) => this.setState({ phase : 1 })}/>
          </Link>
          &nbsp;
          <input type="submit" value="수정" onClick={this.handleSubmitSex} />
        </div>
      </fieldset>
    );
  }
}




export { Pinf };