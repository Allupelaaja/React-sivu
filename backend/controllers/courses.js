const courseRouter = require('express').Router()
const Course = require('../models/course')

courseRouter.get('/', async (request, response) => {
    const courses = await Course.find({})
    response.json(courses.map(course => course.toJSON()))
})

courseRouter.get('/:id', async (request, response) => {
    const id = req.params.id
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
        await user.save()
        response.status(201).json(savedCourse.toJSON())
    } catch (exception) {
        next(exception)
    }
})

courseRouter.delete('/:id', async (req, res, next) => {
    try {
        await Course.findByIdAndRemove(req.params.id)
        res.status(204).end()
    } catch (exception) {
        next(exception)
    }
})

courseRouter.put('/:id', async (req, res, next) => {
    const id = req.params.id
    const body = req.body

    const course = {
        name: body.name,
        grade: body.grade,
        points: body.points,
    }

    try {
        await Course.findByIdAndUpdate(id, course, { new: true })
        res.status(204).end()
    } catch (exception) {
        next(exception)
    }
});

module.exports = courseRouter