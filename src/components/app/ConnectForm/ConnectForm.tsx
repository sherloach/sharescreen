import { useState } from 'react';

import peerServices from '@/services/peer.services';

const ConnectForm = () => {
  const [peerId, setPeerId] = useState('');

  const handleConnect = () => {
    // console.log(peerId);
    peerServices.connect(peerId);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPeerId(value);
  };

  return (
    <div className="mb-3 rounded-sm bg-[#111927] p-4">
      <div className="flex">
        <p className="h5">Your name</p>
        <button type="button" className="ml-2 text-xs">
          Edit
        </button>
      </div>
      <div className="mb-3 mt-2 flex ">
        <p className="h6">room_id:</p>
        <div className="ml-2 h-[24px] max-w-full rounded-2xl bg-[#f3f4f61f] p-1 text-xs">
          <span className="font-medium">#12123</span>
        </div>
      </div>
      <div className="flex">
        <input
          onChange={handleChange}
          value={peerId}
          className="mr-4 w-full flex-grow border border-[#243c5a] bg-[#111927] p-2"
        />
        <button
          className="rounded-none bg-[#6366f1] p-2 text-sm font-medium transition duration-200 hover:bg-[#4338ca]"
          type="button"
          onClick={handleConnect}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectForm;
