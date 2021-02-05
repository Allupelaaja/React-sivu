//React
import React, { useState, useEffect } from 'react'

//Services
import loginService from '../../services/login'
import courseService from '../../services/courses'

//Core
import { Button, DialogTitle, Dialog, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core'

const PasswordForm = (props) => {
    const { onClose, open, user, setUser } = props
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
                <DialogTitle id="simple-dialog-title"><Typography>Please login to modify courses</Typography></DialogTitle>
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
                    <Button onClick={closeWindow}><Typography>Cancel</Typography></Button>
                    <Button type="submit"><Typography>Login</Typography></Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default PasswordForm