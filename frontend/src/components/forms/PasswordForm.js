//React
import React, { useState, useEffect } from 'react'

//Services
import loginService from '../../services/login'
import courseService from '../../services/courses'

//Core
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const PasswordForm = (props) => {
    const { onClose, open, user, setUser } = props;
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        resetInput()
    }, [])

    function resetInput() {
        setPassword('')
        setUsername('')
    }

    function closeWindow() {
        onClose()
        resetInput()
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const attemptUser = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(attemptUser)
            )

            courseService.setToken(attemptUser.token)
            setUser(attemptUser)
            closeWindow()

            //   setNotificationMessage('login successful')
            //   setTimeout(() => {
            //     setNotificationMessage(null)
            //   }, 5000)
        } catch (exception) {
            //   setErrorMessage('wrong username or password')
            //   setTimeout(() => {
            //     setErrorMessage(null)
            //   }, 5000)
            console.log('wrong username or password')
            console.log(exception)
        }
    }

    return (
        <Dialog onClose={closeWindow} aria-labelledby="simple-dialog-title" open={open}>
            <form onSubmit={handleLogin}>
                <DialogTitle id="simple-dialog-title">Please login to modify courses</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        required
                        id="form-username"
                        label="Username"
                        fullWidth
                        value={username}
                        onChange={username => setUsername(username.target.value)}
                        inputProps={{ maxLength: 100 }}
                    />
                    <TextField
                        margin="dense"
                        required
                        id="form-password"
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={password => setPassword(password.target.value)}
                        inputProps={{ maxLength: 100 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="primary">Cancel</Button>
                    <Button type="submit" color="primary">Login</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default PasswordForm