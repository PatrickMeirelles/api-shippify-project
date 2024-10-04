import express from "express";

const server = express();

server.get('/', (_, res: any) => {
    return res.send('first commit, all set')
})

export { server }