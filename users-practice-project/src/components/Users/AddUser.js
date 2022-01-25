import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a name and age'
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a avalid age, greater than 0'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onDismiss={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} ref={nameInputRef}></input>

                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} ref={ageInputRef}></input>

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser