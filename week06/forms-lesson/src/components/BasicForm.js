import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    const {
      value: enteredfName,
      isValid: enteredfNameIsValid,
      hasError: fnameInputHasError,
      valueChangeHandler: fnameChangedHandler,
      inputBlurHandler: fnameBlurHandler,
      reset: resetfNameInput,
    } = useInput((value) => value.trim() !== '');
  
    const {
      value: enteredlName,
      isValid: enteredlNameIsValid,
      hasError: lnameInputHasError,
      valueChangeHandler: lnameChangedHandler,
      inputBlurHandler: lnameBlurHandler,
      reset: resetlNameInput,
    } = useInput((value) => value.trim() !== '');
  
    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangedHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));
  
  let formIsValid = false;

  if (enteredfNameIsValid && enteredlNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    resetfNameInput()
    resetlNameInput();
    resetEmailInput();
  }

  const fnameInputClasses = fnameInputHasError ? 'form-control invalid' : 'form-control'
  const lnameInputClasses = lnameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' className={ fnameInputClasses} onChange={fnameChangedHandler} onBlur={fnameBlurHandler} value={enteredfName}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' className={lnameInputClasses} onChange={lnameChangedHandler } onBlur={lnameBlurHandler } value={ enteredlName}/>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' className={emailInputClasses} onChange={emailChangedHandler } onBlur={emailBlurHandler } value={ enteredEmail}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
