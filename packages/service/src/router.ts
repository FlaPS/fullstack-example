import {Router} from 'express'
import UsersRepository from './UsersRepository'

export default Router()
    .get('/user/:id', async (req, res, next) =>
            res.json(await UsersRepository.getProfileById(req.params.id)),
    )
    .patch('/user/:id', async (req, res, next) =>
        res.json(await UsersRepository.updateProfile(req.body)),
    )
    .get('/users', async (req, res, next) =>
        res.json(await UsersRepository.getAllUsers()),
    )
    .get('/users/count', async (req, res, next) =>
        res.json(await UsersRepository.getTotalUsers()),
    )
