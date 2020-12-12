import * as React from 'react'
import './test.css'
import {Link} from 'react-router-dom';
import account from './account';

class Manage extends React.Component {
    render() {
  
  
      return (
        <fieldset>
          <legend>Manage
              </legend>
          <div>
            <div>환영합니다! {account.name}</div>
            <br />


            <div class = "test">
              <Link to ="/">
                <input type="submit" value="로그아웃" />
              </Link>
              
              &nbsp;

              <Link to ='/PersonalInfo'>
                <input type="submit" value="개인정보" />
              </Link>
            </div>

          </div>

        </fieldset>
  
  
  
      );
    }
  }
  

  
export default Manage;