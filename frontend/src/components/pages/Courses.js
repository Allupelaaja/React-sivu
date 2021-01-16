//React
import React, { useState, useEffect } from 'react'

//Services
import courseService from '../../services/courses'

//Forms
import CourseForm from '../forms/CourseForm'
import PasswordForm from '../forms/PasswordForm'

//Icons
import AddIcon from '@material-ui/icons/Add'
import NoteIcon from '@material-ui/icons/Note'
import DeleteIcon from '@material-ui/icons/Delete'

//Core
import { makeStyles, Button, List, ListItem, ListItemText, IconButton, ListItemIcon, ListItemSecondaryAction, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

const Courses = () => {
    const customTheme = useTheme()
    const useStyles = makeStyles((theme) => ({
        header: {
            textAlign: 'center'
        },
        pageText: {
            textAlign: 'justify'
        },
        list: {
            width: 350
        },
    }))

    const classes = useStyles()
    
    const [courses, setCourses] = useState([])
    const [open, setOpen] = useState(false)
    const [passwordOpen, setPasswordOpen] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [updatingCourse, setUpdatingCourse] = useState({})
    const [user, setUser] = useState(null)
    const [loggedUserJSON, setLoggedUserJSON] = useState(null)

    useEffect(() => {
        const getCourses = async () => {
            const result = await courseService.getAll()
            setCourses(result.data)
        }
        getCourses()
    }, [])

    useEffect(() => {
        setLoggedUserJSON(window.localStorage.getItem('loggedAppUser'))
    }, [])

    useEffect(() => {
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            courseService.setToken(user.token)
        }
    }, [loggedUserJSON])

    const handleClickOpen = () => {
        if (user) {
            setOpen(true)
        } else {
            handlePasswordClickOpen()
        }
    }

    const handleClose = () => {
        setOpen(false)
        setIsUpdating(false)
        setUpdatingCourse(undefined)
    }

    const handlePasswordClickOpen = () => {
        setPasswordOpen(true)
    }

    const handlePasswordClose = () => {
        setPasswordOpen(false)
    }

    async function handleDelete(event, course) {
        event.preventDefault()
        if (loggedUserJSON) {
            try {
                await courseService.deleteItem(course.id)
                console.log(course.name, "deleted from database")
                const newCourses = [...courses]
                newCourses.splice(newCourses.indexOf(course), 1)
                setCourses(newCourses)
            } catch (exception) {
                console.log(exception)
            }
        } else {
            handlePasswordClickOpen()
        }
    }

    function handleModify(event, course) {
        setUpdatingCourse(course)
        setIsUpdating(true)
        handleClickOpen()
    }

    const handleLogout = async (event) => {
        event.preventDefault()
        console.log('logged out')

        setUser(null)
        setLoggedUserJSON(null)
        courseService.setToken(null)
        window.localStorage.removeItem('loggedAppUser')

        // setNotificationMessage('logged out')
        // setTimeout(() => {
        //   setNotificationMessage(null)
        // }, 5000)
    }

    return (
        <div>
            <Typography variant='h4' className={classes.header}>Courses</Typography>
            <div>
                <Typography variant='h5'>List of completed courses:</Typography>
                <div>
                    {user === null ?
                        <></> :
                        <Typography>Logged in as {user.username}</Typography>
                    }
                    {user === null ?
                        <></> :
                        <Button variant="contained" onClick={handleLogout}><Typography>Logout</Typography></Button>
                    }
                    <Button variant="contained" onClick={handleClickOpen}><Typography>Add new course</Typography><AddIcon /></Button>
                    <PasswordForm open={passwordOpen} onClose={handlePasswordClose} user={user} setUser={setUser} />
                    <CourseForm open={open} onClose={handleClose} isUpdating={isUpdating} course={updatingCourse} courses={courses} setCourses={setCourses} />
                </div>
                {courses === undefined ? <></> : courses.map(course =>
                    <div key={course.id}>
                        <List>
                            <ListItem button onClick={((e) => handleModify(e, course))} className={classes.list}>
                                <ListItemIcon>
                                    <NoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={course.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography>Grade: {course.grade}</Typography>
                                            <br />
                                            <Typography>Course credit amount: {course.points}</Typography>
                                            <br />
                                            {course.misc !== undefined ? <Typography>{"Info: " + course.misc}</Typography> : <></>}
                                        </React.Fragment>}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={((e) => handleDelete(e, course))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Courses