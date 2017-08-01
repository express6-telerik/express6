// /* eslint-disable max-len */
// const { expect } = require('chai');
// const sinon = require('sinon');
// const { init } = require('../../../../../app/routers/user.router/controller');
// const ObjectId = require('mongodb').ObjectId;
// //let UsersData = require('../../../../../data/base/base.data');
//
// describe('User controller tests:', () => {
//     let data = null;
//     let UsersData = null;
//     let req = null;
//     let res = null;
//
//     const stub = sinon.stub(ObjectId, 'new ObjectId');
//     describe('getDetailedUser test:', () => {
//         beforeEach(() => {
//
//             const users = [{
//                 username: 'test',
//                 name: 'test',
//                 email: 'test',
//                 id: '1'
//             }];
//
//             data = {
//                 users: {
//                     filterBy(a) {
//                         return Promise.resolve(users);
//                     },
//                 },
//             };
//             UsersData = init(data, stub);
//             req = require('../../../req-res').getRequestMock();
//             res = require('../../../req-res').getResponseMock();
//         });
//
//         afterEach(() => {
//             stub.restore();
//         });
//
//         it('expect getPublicProfile to return users', () => {
//           //  console.log(UsersData);
//             // just for the exept need id without _
//             const user = [{
//                 username: 'test',
//                 name: 'test',
//                 email: 'test',
//                 id: '1'
//             }];
//             return UsersData.getDetailedUser(req, res)
//                 .then(() => {
//                    // expect(res.context).to.eql(user);
//                     expect(res.viewName).to.eql('user/user-details');
//                 });
//         });
//     });
// });