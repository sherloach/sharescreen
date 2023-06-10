/* eslint-disable no-console */
import Peer, { DataConnection } from 'peerjs';

import randomId from '@/helpers/randomId';

interface IOnConnectionListener {
  conn: DataConnection;
  isIncoming: boolean;
}

class PeerService {
  client: Peer;

  connections: DataConnection[] = [];

  onConnection: {
    listeners: IOnConnectionListener[];
    addListeners: (fn: IOnConnectionListener) => void;
  } = {
    listeners: [],
    addListeners: (fn) => {
      this.onConnection.listeners.push(fn);
    },
  };

  initialize(id?: string) {
    if (!id) id = randomId();
    this.client = new Peer(id);
    // console.log(this.client._id);

    // Anytime another peer attempt to connect to your
    // peer ID, you will receive a connection event.
    this.client.on('connection', (conn) => {
      conn.on('open', () => {
        conn.send('Connected!');
        this.addConnection(conn);
        console.log('connections: ', this.connections);
      });

      conn.on('data', (data) => {
        console.log('main:', data);
      });
    });

    this.client.on('error', (error) => {
      console.error(error);
    });
  }

  addConnection(connection: DataConnection) {
    const isConnExist = this.connections.find(
      (conn: DataConnection) => conn.connectionId === connection.connectionId
    );

    if (!isConnExist) {
      this.connections.push(connection);
    }
  }

  connect(peerId: string) {
    const conn = this.client.connect(peerId);

    conn.on('open', () => {
      this.addConnection(conn);
      console.log('connections: ', this.connections);
      conn.send('Hello');
    });

    conn.on('data', (data) => {
      console.log('Received:', data);
    });

    this.client.on('error', (error) => {
      console.error(error);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendAll(message: any) {
    if (!this.connections.length) return;

    this.connections.forEach((conn) => conn.send(message));
  }
}

export default new PeerService();
