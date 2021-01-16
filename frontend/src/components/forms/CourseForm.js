//React
import React, { useState, useEffect } from 'react'

//Services
import courseService from '../../services/courses'

//Core
import { Button, DialogTitle, Dialog, DialogActions, DialogContent, TextField, MenuItem, Typography } from '@material-ui/core'

function CourseForm(props) {
    const { onClose, open, course, isUpdating, courses, setCourses } = props
    const [name, setName] = useState()
    const [grade, setGrade] = useState()
    const [points, setPoints] = useState()
    const [misc, setMisc] = useState()

    useEffect(() => {
        if (course) {
            setName(course.name)
            setGrade(course.grade)
            setPoints(course.points)
            setMisc(course.misc)
        } else {
            resetInput()
        }
    }, [isUpdating, course])

    const grades = [0, 1, 2, 3, 4, 5]

    function resetInput() {
        setName()
        setGrade()
        setPoints()
        setMisc()
    }

    function closeWindow() {
        onClose()
        resetInput()
    }

    const handleSubmit = async (event) => {
        if (isUpdating) {
            event.preventDefault()
            const updatedCourse = {
                name: name,
                grade: grade,
                points: points,
                misc: misc
            }
            try {
                const result = await courseService.update(course.id, updatedCourse)
                console.log(result.data, "updated to database")
                const updatedCourses = [...courses]
                updatedCourses.splice(updatedCourses.indexOf(course), 1)
                updatedCourses.push(result.data)
                setCourses(updatedCourses)
                closeWindow()
            } catch (exception) {
                console.log(updatedCourse)
                console.log(exception)
            }
        } else {
            event.preventDefault()
            const newCourse = {
                name: name,
                grade: grade,
                points: points,
                misc: misc
            }
            try {
                const result = await courseService.create(newCourse)
                console.log(result.data, "created in database")
                const newCourses = [...courses]
                newCourses.push(result.data)
                setCourses(newCourses)
                closeWindow()
            } catch (exception) {
                console.log(exception)
            }
        }
    }

    return (
        <Dialog onClose={closeWindow} aria-labelledby="simple-dialog-title" open={open}>
            <form onSubmit={handleSubmit}>
                <DialogTitle id="simple-dialog-title"><Typography>Submit new course</Typography></DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        required
                        type="string"
                        id="form-name"
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={name => setName(name.target.value)}
                        inputProps={{ maxLength: 100 }}
                    />
                    <TextField
                        required
                        margin="dense"
                        select
                        id="form-grade"
                        label="Grade"
                        fullWidth
                        value={grade}
                        onChange={grade => setGrade(grade.target.value)}
                    >
                        {grades.map((selection) => (
                            <MenuItem key={selection} value={selection}>
                                {selection}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="dense"
                        required
                        type="number"
                        id="form-points"
                        label="Points"
                        fullWidth
                        value={points}
                        onChange={points => setPoints(points.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="standard-multiline-static"
                        label="Info"
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={4}
                        value={misc}
                        onChange={misc => setMisc(misc.target.value)}
                        inputProps={{ maxLength: 255 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow}><Typography>Cancel</Typography></Button>
                    {
                        isUpdating ?
                            <Button type="submit"><Typography>Update</Typography></Button> :
                            <Button type="submit"><Typography>Submit</Typography></Button>
                    }
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default CourseForm