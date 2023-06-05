import QueueItem from './QueueItem';

const thumbnail =
  'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn';
const title =
  'PHỎNG VẤN MAN UNITED - MAN CITY: TEN HAG QUYẾT TÂM VÔ ĐỊCH, PEP GUARDIOLA THẬN TRỌNG PHỎNG VẤN MAN UNITED - MAN CITY: TEN';

const Queue = () => {
  return (
    <div className="min-h-[300px] flex-grow bg-[#111927]">
      <div className="mb-2 flex items-center justify-between border-b border-b-[#6366f1] p-3">
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
            Get
          </button>
        </div>
      </div>
      <div className="h-full max-h-[390px] overflow-y-auto">
        <ul>
          <QueueItem title={title} time="2:20" thumbnail={thumbnail} />
        </ul>
      </div>
    </div>
  );
};

export default Queue;
