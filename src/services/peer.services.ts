/* eslint-disable no-console */
import Peer from 'peerjs';

import randomId from '@/helpers/randomId';

class PeerService {
  client: Peer;

  initialize(id?: string) {
    if (!id) id = randomId();
    this.client = new Peer(id);
    console.log(this.client);

    // Anytime another peer attempt to connect to your
    // peer ID, you will receive a connection event.
    this.client.on('connection', (conn) => {
      console.log(conn);
      conn.on('open', () => {
        conn.send('GGWL');
      });
    });

    this.client.on('error', (error) => {
      console.error(error);
    });
  }

  connect(peerId: string) {
    const conn = this.client.connect(peerId);

    conn.on('open', () => {
      conn.on('data', (data) => {
        console.log('Received:', data);
      });
    });
  }
}

export default new PeerService();
