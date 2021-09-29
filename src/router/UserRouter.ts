import {userRepository} from "../repository/UserRepository";
import express from 'express';

const userRouter = express.Router();

userRouter.get('', (req, res) => {
    const users = userRepository.getAllUsers();
    res.json(users);
});

userRouter.post('', (req, res) => {
    const user = req.body;
    userRepository.addUser(user);
    res.json('ok');
});

export default userRouter;