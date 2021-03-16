//React
import React, { useState, useEffect } from 'react'

//Services
import courseService from '../../services/courses'

//Forms
import CourseForm from '../forms/CourseForm'
import PasswordForm from '../forms/PasswordForm'

//Icons
import AddIcon from '@material-ui/icons/Add'
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete'

//Core
import { makeStyles, Button, List, ListItem, ListItemText, IconButton, ListItemIcon, ListItemSecondaryAction, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

const Courses = () => {
    // eslint-disable-next-line no-unused-vars
    const customTheme = useTheme()
    // eslint-disable-next-line no-unused-vars
    const useStyles = makeStyles((theme) => ({
        header: {
            textAlign: 'center'
        },
        pageText: {
            textAlign: 'justify'
        },
        list: {
            maxWidth: "100%"
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
            //Sorts by name
            result.data.sort((a, b) => a.name.localeCompare(b.name))
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
            <br/>
            <div>
                <Typography variant='h5'>List of completed courses:</Typography>
                <br/>
                <div>
                    {user === null ?
                        <></> :
                        <Typography>Logged in as {user.username}</Typography>
                    }
                    {user === null ?
                        <></> :
                        <Button variant="outlined" onClick={handleLogout}><Typography>Logout</Typography></Button>
                    }
                    <Button variant="outlined" onClick={handleClickOpen}><AddIcon />&nbsp;<Typography>Add new course</Typography></Button>
                    <PasswordForm open={passwordOpen} onClose={handlePasswordClose} user={user} setUser={setUser} />
                    <CourseForm open={open} onClose={handleClose} isUpdating={isUpdating} course={updatingCourse} courses={courses} setCourses={setCourses} />
                </div>
                <List className={classes.list}>
                    {courses === undefined ? <></> : courses.map(course =>
                        <div key={course.id}>
                            <ListItem button onClick={((e) => handleModify(e, course))}>
                                <ListItemIcon>
                                    <AssignmentIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={course.name}
                                    secondary={
                                        <React.Fragment>
                                            Grade: {course.grade}
                                            <br />
                                            Course credit amount: {course.points}
                                            <br />
                                            {course.misc !== (undefined || null) ? "Info: " + course.misc : <></>}
                                        </React.Fragment>}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={((e) => handleDelete(e, course))}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </div>
                    )}
                </List>
            </div>
        </div>
    )
}

export default Courses