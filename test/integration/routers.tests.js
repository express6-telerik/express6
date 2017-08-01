const request = require('supertest');
const expect = require('chai').expect;

describe('-- Other routes tests --', () => {
    const connectionString = 'mongodb://localhost/room-db-tests';
    let app = null;

    beforeEach(() => {
        return Promise.resolve()
            .then(() => require('../../db').init(connectionString))
            .then((db) => require('../../data').init(db))
            .then((data) => require('../../app').init(data))
            .then((_app) => {
                app = _app;
            });
    });

    describe('GET /', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/')
                .expect('Content-type', /html/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }

                    done();
                });
        });
    });

    describe('GET /chat', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/chat')
                .expect('Content-type', /html/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }

                    done();
                });
        });
    });

    describe('GET /contacts', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/contacts')
                .expect('Content-type', /html/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }

                    done();
                });
        });
    });


    describe('GET /404', () => {
        it('should return 404', (done) => {
            request(app)
                .get('/404')
                .expect(404)
                .end((err, res) => {
                    done();
                });
        });
    });
});
