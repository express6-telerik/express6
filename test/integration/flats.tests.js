const request = require('supertest');

describe('flats router tests:', () => {
    const connectionString = 'mongodb://localhost/room-db-test';
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

    describe('/GET tests:', () => {
        // it('expect 200 on /flat/:id', (done) => {
        //     request(app)
        //         .get('/flat/597f2403c16f8c3d5c6ee153')
        //         .expect('Content-type', /html/)
        //         .expect(200)
        //         .end((err, res) => {
        //             if (err) {
        //                 done(err);
        //             }
        //
        //             done();
        //         });
        //         });
        // });

        it('expect 302 on /addflat/', (done) => {
            request(app)
                .get('/addflat')
                .expect(302)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });

        describe('GET /flats', () => {
            it('expect to return 200', (done) => {
                request(app)
                    .get('/flats')
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
        // describe('GET /vipflats', () => {
        //     it('expect to return 200', (done) => {
        //         request(app)
        //             .get('/vipflats')
        //             .expect('Content-type', /html/)
        //             .expect(200)
        //             .end((err, res) => {
        //                 if (err) {
        //                     done(err);
        //                 }
        //
        //                 done();
        //             });
        //     });
        // });
    })
    })

    // describe('/POST tests:', () => {
    //     const thread = {
    //         parent: 'test',
    //         name: 'test',
    //         createdBy: 'test',
    //         createdById: 'test',
    //         createdByImg: 'test',
    //         createdOn: 'test',
    //         content: 'test',
    //     };
    //     it('expect 200 on /createthread/:id', (done) => {
    //         request(app)
    //             .get('/createthread/:id')
    //             .send(thread)
    //             .expect(200)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return done(err);
    //                 }
    //
    //                 return done();
    //             });
    //     });
   // });

