require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note prefer pulse just clinic equal gasp'; 
let testAccounts = [
"0x0c448a5b4be44b56d2328d79e7818f4fd603b57487a1ef63b22cb3b0d114fe67",
"0x300949b7fc22e436d24a79fbe39d9063da6f61e1714ef2754262988a10ea217f",
"0x6640fcbef9b45cae3b12834c019c34994ed2b8e5c7eb8331276c03fd7e99c518",
"0x83fec4356beab6ce49e98a57e5777c07e64770022eeaa2c36874efc0a73e7986",
"0xf6d2b31a37b0fba03b5ee6a77940f7728a7f283526e70259089d2862949563fa",
"0x7bb2f88068a5fb7aa66d6af5e120a96c4af3c6bc88be4f2d4c5b0defa52f04f4",
"0x645fc1845ac41d1d8db62b319001a7bee76d83baba0e3e6ccaa7770d266b40df",
"0xd03538843abc239574034809213fbf209ed92a7d8d16ea3bf2ad892d67e26c44",
"0x274d2d8da47740f99c67ea18d152cdba6ab4223b1de59cf9a309bea0bff22c07",
"0x790a4d0608bb9ac54b785bfa1e671aeda653fe5ff0b2e0452234a4529065214c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
