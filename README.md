ARDcore P2P
=======

`ARDcore-p2p` adds [ARDcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for ARDcore.

See [the main ARDcore repo](https://github.com/underdarkskies/ARDcore) for more information.

## Getting Started

```sh
npm install ARDcore-p2p
```
In order to connect to the ARDcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('ARDcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/underdarkskies/ARDcore/blob/master/CONTRIBUTING.md) on the main ARDcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/underdarkskies/ARDcore/blob/master/LICENSE).
