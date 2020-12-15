import React, { useState, useEffect } from 'react'
import courseService from '../../services/courses'

const Courses = () => {

    const [courses, setCourses] = useState([])

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
            {courses.map(course =>
                <div>
                    Name: {course.name} Grade: {course.grade} Study points: {course.points}
                </div>
            )}
        </div>
    )
}

export default Courses;