# private-chat
Trivial anonymous chat based on peer.js P2P library

## How does it work
After you open [the site](http://alun.github.io/private-chat/)
you will be given one time (session) id and link which could be used to connect to you.
First who opens the link will be connected to you via P2P and send initial `hey, I'm here` message,
which allows you to get his one time id and connect your messages to it.

### P2P
This means server will only be involved in intial id to ip adress mapping,  
messages themselves are sent right from one browser to another without the server in between.

### History
History is only saved until page is closed.

### Security
It's based on WebRTC which is encrypted by default using DTLS. The encryption heapped between two peers. So there is no man in a middle, which is pretty secure.
