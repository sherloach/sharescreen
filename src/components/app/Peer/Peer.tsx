import { useEffect } from 'react';

import PeerServices from '@/services/peer.services';

const Peer = () => {
  useEffect(() => {
    PeerServices.initialize();
  });

  return null;
};

export default Peer;
