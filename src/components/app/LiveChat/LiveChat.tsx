const LiveChat = () => {
  return (
    <div className="h-[80%] rounded-sm bg-[#111927] p-4">
      <p className="">LiveChat</p>
      <div className="flex">
        <input className="mr-2 flex-grow border border-[#243c5a] bg-[#111927] p-2" />
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
