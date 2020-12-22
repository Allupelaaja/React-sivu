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

const useStyles = makeStyles((theme) => ({
    list: {
        width: 350
    },
}));

const Courses = () => {
    const classes = useStyles();

    const [courses, setCourses] = useState([])
    const [open, setOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatingCourse, setUpdatingCourse] = useState({})

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        setIsUpdating(false)
        setUpdatingCourse(undefined)
    };

    async function handleDelete(event, course) {
        event.preventDefault()
        try {
            await courseService.deleteItem(course.id)
            console.log(course + " deleted from database")
            const newCourses = [...courses]
            newCourses.splice(newCourses.indexOf(course), 1)
            setCourses(newCourses)
        } catch (exception) {
            console.log(exception)
        }
    }

    function handleModify(event, course) {
        setUpdatingCourse(course)
        setIsUpdating(true)
        handleClickOpen()
    }

    useEffect(() => {
        const getCourses = async () => {
            const result = await courseService.getAll()
            setCourses(result.data)
        }
        getCourses()
    }, [])

    return (
        <div>
            <h1>Courses</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>Add new course<AddIcon /></Button>
                <CourseForm open={open} onClose={handleClose} isUpdating={isUpdating} course={updatingCourse} courses={courses} setCourses={setCourses}/>
            </div>
            <div>
                <h2>List of courses</h2>
                {courses.map(course =>
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

    )
}

export default Courses;