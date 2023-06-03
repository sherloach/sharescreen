const LiveChat = () => {
  return (
    <div className="flex h-full flex-col bg-[#111927]">
      <div className="w-full border-b border-b-[#6366f1] pb-1">
        <p className="h6">Chat</p>
      </div>
      <div className="flex-grow">
        <div className="flex items-start pt-3">
          <div className="rounded-full bg-pink-400 p-1">
            <span>HN</span>
          </div>
          <p className="ml-2 text-sm">
            this is a message this is a message this is a message this is a
            message this is a message
          </p>
        </div>
        <div className="flex items-start pt-3">
          <div className="rounded-full bg-pink-400 p-1">
            <span>HN</span>
          </div>
          <p className="ml-2 text-sm">
            this is a message this is a message this is a message this is a
            message this is a message
          </p>
        </div>
      </div>
      <div className="flex">
        <input className="mr-2 w-full flex-grow border border-[#243c5a] bg-[#111927] p-2" />
        <button
          className="rounded-none bg-[#6366f1] p-2 text-sm font-medium transition duration-200 hover:bg-[#4338ca]"
          type="button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
