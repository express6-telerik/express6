const { expect } = require('chai');
const sinon = require('sinon');

const UserData = require('../../../data/users.data');

describe('user.data methods tests:', () => {
    const db = {
        collection: () => { },
    };

    const callback = (boolean) => {
        if (boolean) {
            return true;
        }

        return boolean;
    };
    let data = null;
    let users = null;
    describe('findByUsername method test:', () => {
        beforeEach(() => {
            users = [{
                username: 'test',
            }];

            data = new UserData(db);

            sinon.stub(data, 'filterBy')
                .callsFake(() => {
                    return Promise.resolve(users);
                });
        });

        afterEach(() => {
            data.filterBy.restore();
        });


        it('expect method to find name', () => {
            return data.findByUsername('test')
                .then((models) => {
                    expect(models).to.deep.equal({username: 'test'});
                });

        });
    });

    describe('checkForFreeUsername method test:', () => {
        beforeEach(() => {
            users = [{
                username: 'test',
            }];

            data = new UserData(db);

            sinon.stub(data, 'filterBy')
                .callsFake(() => {
                    return Promise.resolve(users);
                });
        });

        afterEach(() => {
            data.filterBy.restore();
        });


        it('expect method to return: Регистрирахте се', () => {
            return data.checkForFreeUsername('test1', 'test1')
                .then((validator) => {
                    expect(validator.msg).to.eql('Регистрирахте се');
                });
        });
    });

       describe('checkPasswords method test:', () => {
        beforeEach(() => {
            data = new UserData(db);
        });


        it('excpect checkPasswords to return true', () => {
            const result = data.
            checkPasswords('test', 'test', callback);
            expect(result).to.eql(true);
        });

        it('excpect checkPasswords to return false', () => {
             const result = data.
            checkPasswords('test', 'test1', callback);
            expect(result).to.eql(false);
        });
     });
});