# anonymous-chat
Trivial anonymous chat based on peer.js P2P library

## How does it work
After you open [the site](https://alun.github.io/anonymous-chat/)
you will be given one time (session) id and link which could be used to connect to you.
First who opens the link will be connected to you via P2P and send initial `hey, I'm here` message,
which allows you to get his one time id and connect your messages to it.
