Bitcoin = module.exports = {
  Address: require('./address'),
  base58check: require('./base58check'),
  bufferutils: require('./bufferutils'),
  crypto: require('./crypto'),
  ecdsa: require('./ecdsa'),
  ECKey: require('./eckey'),
  ECPubKey: require('./ecpubkey'),
  ECSignature: require('./ecsignature'),
  Message: require('./message'),
  opcodes: require('./opcodes'),
  HDNode: require('./hdnode'),
  Script: require('./script'),
  scripts: require('./scripts'),
  Transaction: require('./transaction'),
  TransactionBuilder: require('./transaction_builder'),
  networks: require('./networks'),
  Wallet: require('./wallet')
}

BigInteger = require('bigi')