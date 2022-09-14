import express from 'express';
const app = express();
app.get('/ads', (resquest, response) => {
    return response.json([
        { id: 1, name: 'ad 1' },
        { id: 2, name: 'ad 2' },
        { id: 3, name: 'ad 3' },
        {id: 4, name: 'ad 4'}
    ]);
});
app.listen(8080);
