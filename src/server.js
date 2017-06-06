import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes';

const app = express();
app.use(favicon('dist/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js', express.static('dist/js'));
app.use('/css', express.static('dist/css'));
app.use('/images', express.static('dist/images'));

routes(app);

app.listen(3000, function () {

});
