//React
import React, { useState, useEffect } from 'react'

//Services
import courseService from '../../services/courses'

//Forms
import CourseForm from '../forms/CourseForm'

//Icons
import AddIcon from '@material-ui/icons/Add';
import NoteIcon from '@material-ui/icons/Note';
import DeleteIcon from '@material-ui/icons/Delete';

//Core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PasswordForm from '../forms/PasswordForm';

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
    page: {
        width: '75%',
        margin: '0 auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '25px',
        backgroundColor: 'white',
    },
    backgroundPage: {
        backgroundColor: 'lightgrey',
        position: 'absolute',
        width: '100%',
        height: '-webkit-fill-available',
    },
}));

const Courses = () => {
    const classes = useStyles();

    const [courses, setCourses] = useState([])
    const [open, setOpen] = useState(false);
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
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
            setOpen(true);
        } else {
            handlePasswordClickOpen()
        }
    };

    const handleClose = () => {
        setOpen(false)
        setIsUpdating(false)
        setUpdatingCourse(undefined)
    };

    const handlePasswordClickOpen = () => {
        setPasswordOpen(true);
    };

    const handlePasswordClose = () => {
        setPasswordOpen(false)
    };

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
        <div className={classes.backgroundPage}>
            <div className={classes.page}>
                <h1 className={classes.header}>Courses</h1>
                <div>
                    <h2>List of completed courses:</h2>
                    <div>
                        {user === null ?
                            <></> :
                            <p>Logged in as {user.username}</p>
                        }
                        {user === null ?
                            <></> :
                            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
                        }
                        <Button variant="outlined" onClick={handleClickOpen}>Add new course<AddIcon /></Button>
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
                                                Grade: {course.grade}
                                                <br />
                                            Study points: {course.points}
                                                <br />
                                            Info: {course.misc}
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
        </div>
    )
}

export default Courses;