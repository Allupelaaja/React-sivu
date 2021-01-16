const courseRouter = require('express').Router()
const Course = require('../models/course')
const jwt = require('jsonwebtoken')

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
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        if (!decodedToken) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }

        const course = new Course({
            name: body.name,
            grade: body.grade,
            points: body.points,
            misc: body.misc
        })

        const savedCourse = await course.save()
        response.status(201).json(savedCourse.toJSON())
    } catch (exception) {
        next(exception)
    }
})

courseRouter.delete('/:id', async (request, response, next) => {
    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        if (!decodedToken) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }

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
        misc: body.misc
    }

    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        if (!decodedToken) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }

        await Course.findByIdAndUpdate(id, course, { new: true })
        response.status(204).end()
    } catch (exception) {
        next(exception)
    }
})

module.exports = courseRouter