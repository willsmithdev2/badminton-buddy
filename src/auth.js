import GoogleAuth from 'google-auth-library';
import q from 'q';
import whitelist from './whitelist';

const auth = new GoogleAuth;
const client = new auth.OAuth2('995541794066-dvg3838q1og4pbjf9ctelbca6ev35dsu.apps.googleusercontent.com', '', '');
export default (token, res) => {
    const deferred = q.defer();
    if (!token) {
        deferred.reject();
    } else {
        client.verifyIdToken(
          token,
          '995541794066-dvg3838q1og4pbjf9ctelbca6ev35dsu.apps.googleusercontent.com',
          (e, login) => {
              const payload = login.getPayload();
              const email = payload['email'];
              if (whitelist.includes(email)) {
                  console.log('Accepted ' + email);
                  deferred.resolve(email);
              } else {
                  console.log('Rejected ' + email);
                  deferred.reject();
              }
          });
    }

    deferred.promise.catch(() => {
        res.status('403');
        res.send('Access denied');
    });
    return deferred.promise;
};
