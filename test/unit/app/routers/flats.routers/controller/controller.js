// /**
//  * Created by Lili on 7/31/2017.
//  */
// const { expect } = require('chai');
//
// const { init } =
//     require('../../../../../../app/routers/flats.routers/controller');
//
// describe('items controller', () => {
//     let data = null;
//     let controller = null;
//     const items = [1, 2, 3, 4];
//
//     let req = null;
//     let res = null;
//
//     beforeEach(() => {
//         data = {
//             items: {
//                 getAll() {
//                     return Promise.resolve(items);
//                 },
//             },
//         };
//
//         controller = init(data);
//         req = require('../../../../req-res').getRequestMock();
//         res = require('../../../../req-res').getResponseMock();
//     });
//
//     it('expect get all to return items', () => {
//         return controller.getAll(req, res)
//             .then(() => {
//                 expect(res.context).to.be.deep.equal({
//                     context: items,
//                 });
//                 expect(res.viewName).to.be.equal('flats');
//             });
//     });
// });