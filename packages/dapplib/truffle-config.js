require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stomach cruise soap coach include argue oppose gaze'; 
let testAccounts = [
"0xdfed711811a8f080ac7eeaac04c88a9ba4e8321ddd588f7c1d98b953dcb6f4f3",
"0x3fcb453d768ce9db53de415dc7ab364517f49ba9dd460211e659ad47baebc0b2",
"0x31192cbf58220031dd3f72bd40d49e8faea9277102e3b9b36ca039abb14b7c70",
"0x77c7c14220f5292cd0f726985a28d7d0dc971bd4976a648d37c9859e31f6c939",
"0x484135ac5ef5ad2a624827c86bc6849fb9129266178ea5098eff16987dbdc650",
"0xa00354702638ac8983c320299ceeb0eb1fc63e99f556680d98e283af4d460d6a",
"0xf05283a7e8a1d36d3af46b1af5afefcc928c4d060a79d4fca2f8e89f084cf8e5",
"0x132e0e8472f2a3d934a2d5f3f96ebd5fb22c16a981c5a08c3baade154d94e004",
"0x618775950f0cc42bf03c439cf9a95d166384ffce0826094e2972d8a28c282f88",
"0xb194ac3c50302d8ebaaf4d8e0f217e4c5bcbaa86f2e07b6e8120eac571ac42c0"
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
            version: '^0.8.0'
        }
    }
};

