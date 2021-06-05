const MTToken = artifacts.require("MTToken");

const { BN } = require('@openzeppelin/test-helpers');

contract('MTToken', function (accounts) {
    const [ initialHolder, recipient, anotherAccount ] = accounts;

    const name = 'MTToken Token';
    const symbol = 'MT';

    const initialSupply = new BN(100);

    beforeEach(async function () {
        this.token = await MTToken.new();
        this.token.mint(initialHolder, initialSupply);
    });

    it('has a name', async function () {
        expect(await this.token.name()).to.equal(name);
    });
});
