// Code goes here

var katlex = (function () {

var ui = document.forms.ui,
  peer = new Peer({key: 'lwjd5qra8257b9'}),
  conns = {},
  stdout = document.getElementById('stdout');
  

function println(msg1, msg2) {
  print(msg1, 'small');
  print(' ');
  print(msg2);
  printEOL();
}

function printEOL() {
  stdout.innerHTML += '<br/>';
}

function myPeerLink() {
  var href = location.href,
    suff = href.indexOf('?') == -1 ? '?' : '&';
    link = [href, suff, 'peer=', peer.id].join('');
  return ['<a href="', link, '">', link, '</a>'].join('');
}

function print(msg, attachClass) {
  var attachedClass = attachClass ?
    (' class="' + attachClass +'"') : '';
  stdout.innerHTML +=
    ['<span', attachedClass, '>',
      msg, '</span>'].join('');
}

function submit(event) {
  sendMessage(ui.peer.value, ui.message.value);
  
  event.preventDefault();
  event.stopImmediatePropagation();
  
  return false;
}

function sendMessage(id, msg) {
  var conn = conns[id];
  function send() {
      println('you:', msg);
      conn.send(msg);
      ui.message.value = '';
  }
  
  if (msg.length > 0 && id.length > 0) {
    if (!conn) {
      conn = peer.connect(id);
      println('connecting to', id);
      conn.on('open', function () {
        println('connected to', id);
        printMessages(conn);
        send();
      });
      conns[id] = conn;
    }
    else {
      send();
    }
  }
}

function printMessages(conn) {
  conn.on('data', function (v) {
    println(conn.peer + ':', v);
  });
}

function autoInit() {
  function detectPeer() {
    var href = location.href,
      peer = /peer=([0-9a-z]+)/.exec(href);
    if (peer && peer.length > 1) {
      peer = peer[1];
    }
    return peer;
  }
  
  var id =  detectPeer();
  if (id) {
    ui.peer.value = id;
    sendMessage(id, "hey, i'm here");
  }
}

peer.on('open', function (id) {
  println('your id is', id);
  println('link to talk with you', myPeerLink());
  autoInit();
});

peer.on('connection', function (conn) {
  println('received connection from', conn.peer);
  conns[conn.peer] = conn;
  ui.peer.value = conn.peer;
  printMessages(conn);
});

return {
  chat: {
    submit: submit
  }
}

}());