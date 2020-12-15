const courseRouter = require('express').Router()
const Course = require('../models/course')

courseRouter.get('/', async (request, response) => {
    const courses = await Course.find({})
    response.json(courses.map(course => course.toJSON()))
})

courseRouter.get('/:id', async (request, response) => {
    const id = request.params.id
    const course = await Course.findById(id)
    response.json(course.toJSON(course))
})

courseRouter.post('/', async (request, response, next) => {
    const body = request.body

    try {
        const course = new Course({
            name: body.name,
            grade: body.grade,
            points: body.points,
        })

        const savedCourse = await course.save()
        response.status(201).json(savedCourse.toJSON())
    } catch (exception) {
        next(exception)
    }
})

courseRouter.delete('/:id', async (request, response, next) => {
    try {
        await Course.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
})

courseRouter.put('/:id', async (request, response, next) => {
    const id = request.params.id
    const body = request.body

    const course = {
        name: body.name,
        grade: body.grade,
        points: body.points,
    }

    try {
        await Course.findByIdAndUpdate(id, course, { new: true })
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
});

module.exports = courseRouter