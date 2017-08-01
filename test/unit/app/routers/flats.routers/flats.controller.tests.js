// const { expect } = require('chai');
//
// const { init } =
//     require('../../../../../app/routers/flats.routers/controller');
//
// describe('items controller', () => {
//     let data = null;
//     let FlatsData = null;
//     let flats = [1, 2, 3, 4];
//
//     let req = null;
//     let res = null;
//
//     beforeEach(() => {
//         data = {
//             flats: {
//                 getAll() {
//                     return Promise.resolve(flats);
//                 },
//             },
//         };
//
//         FlatsData = init(data);
//         req = require('../../../req-res').getRequestMock();
//         res = require('../../../req-res').getResponseMock();
//     });
//
//     it('expect get all to return flats', () => {
//         console.log(FlatsData);
//         return FlatsData.getAll(req, res)
//             .then(() => {
//                 expect(res.context).to.be.deep.equal({
//                     context: flats,
//                 //     username: req.params.username,
//                 //     startDate: req.params.startDate,
//                 //     endDate: req.params.endDate,
//                 //     title: req.params.title,
//                 //     content: req.params.content,
//                 //     vipstatus: req.params.vipstatus,
//                 //     location: req.params.location,
//                 //     neededMates: req.params.neededMates,
//                 //     price: req.params.price,
//                 //     img: req.params.img,
//                  });
//                 expect(res.viewName).to.be.equal('flats');
//             });
//     });
//     describe('flats controller findById: item', () => {
//         let data = null;
//         let FlatsController = null;
//         let flats = null;
//         let index = 0;
//
//         let req = null;
//         let res = null;
//
//         describe('flats contoller filterById test: item', () => {
//             beforeEach(() => {
//                 flats = {
//                     flat: 'test',
//                 };
//                 const params = {
//                     id: '1',
//                 };
//                 data = {
//                     flats: {
//                         findById() {
//                             return Promise.resolve(flats.flat);
//                         },
//                     },
//                 };
//                 FlatsData = init(data);
//                 req = require('../../../req-res')
// .getRequestMock({ params: params });
//                 res = require('../../../req-res').getResponseMock();
//             });
//
//             afterEach(() => {
//                 flats = [];
//             });
//
//             it('expect filterBy to return flats', () => {
//                 return FlatsData.filterBy(req, res)
//                     .then(() => {
//                         expect(res.context).to.eql({ flat: flats.flat});
//                         expect(res.viewName).to.eql('flat');
//                     });
//             });
//
//             });   });
// });
