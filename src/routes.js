import isAuthed from './auth';

export default (app) => {

    app.get('/', (req, res) => {
        res.sendFile('views/login.html', {root: './dist'});
    });

    //Wrap any URL with us authed which will check if user has Google auth creds and is on whitelist
    app.post('/sign-in', (req, res) => {
        isAuthed(req.body.idtoken, res).then(() => {
            res.status = 200;
            res.send();
        });
    });

    app.get('/home', (req, res) => {
        isAuthed(req.cookies.idtoken, res).then(() => {
            res.sendFile('views/home.html', {root: './dist'});
        });
    });
};
