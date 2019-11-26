# private-chat
P2P anonymous chat based on peer.js P2P library in just less than 100 lines of JS code.

## How does it work
After you open [the site](http://alun.github.io/private-chat/)
you will be given one time (session) id and link which could be used to connect to you.
First who opens the link will be connected to you via P2P and send initial `hey, I'm here` message,
which allows you to get his own id and connect your messages to it.

### P2P
This means server will only be involved only into intial id to ip adress mapping,  
messages themselves are sent right from one browser to another without the server in between.

### History
No history. History is only preserved until the web page is closed.

### Security
The tool based on WebRTC which is encrypted by default using DTLS. The encryption heapped between two peers. So there is no man in a middle, which is fairly secure.
