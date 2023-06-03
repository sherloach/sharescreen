const Queue = () => {
  return (
    <div className="min-h-[300px] flex-grow bg-[#111927]">
      <div className="flex items-center justify-between">
        <p className="h6">Queue</p>
        <div>
          <input
            placeholder="url"
            className="flex-grow border border-[#243c5a] bg-[#111927] p-1"
          />
          <button
            className=" mx-2 rounded-none bg-transparent p-1 text-sm font-medium transition duration-200 hover:bg-[#4338ca]"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
      <div className="">
        <div>gg</div>
      </div>
    </div>
  );
};

export default Queue;
