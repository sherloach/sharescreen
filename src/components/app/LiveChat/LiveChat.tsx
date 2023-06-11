import { useState } from 'react';

import PeerServices from '@/services/peer.services';

const LiveChat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const send = () => {
    PeerServices.sendAll(message);
    setMessage('');
    setMessages([...messages, message]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      send();
    }
  };

  console.log({ messages });

  return (
    <div className="flex h-full flex-col bg-[#111927]">
      <div className="w-full border-b border-b-[#6366f1] p-4">
        <p className="h6">Chat</p>
      </div>
      <div className="h-full max-h-[720px] flex-grow overflow-y-auto">
        {messages.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={idx} className="flex items-start px-4 py-3">
            <div className="rounded-full bg-pink-400 p-1">
              <span>HN</span>
            </div>
            <p className="ml-2 text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="mb-2 flex px-2">
        <input
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="mr-2 w-full flex-grow border border-[#243c5a] bg-[#111927] p-2"
        />
        <button
          className="rounded-none bg-[#6366f1] p-2 text-sm font-medium transition duration-200 hover:bg-[#4338ca]"
          type="button"
          onClick={send}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
