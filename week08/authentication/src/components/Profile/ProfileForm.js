import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authContext = useContext(AuthContext)
  const history = useHistory();

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPaswword = newPasswordInputRef.current.value
    //add validation;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=[AIzaSyAfgkimsOTrpUxekcRzNS5Z1o2Ydh87Es4]`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authContext.token,
        password: enteredNewPaswword,
        returnSecureToken: false
      }),
      headers: { 'Content-Type': 'application/json'}
    }).then(res => {
      // skipping error handling for now
      history.replace('/')

    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} minLength='7'/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
