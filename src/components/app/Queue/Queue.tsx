/* eslint-disable import/no-extraneous-dependencies */
import { CiPlay1 } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';

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
        <div>
          <ul>
            <li className="border-be-ytb-item flex items-center justify-between py-3">
              <img
                className="mx-3 h-[48px]"
                src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
                alt="Thumbnail"
              />
              <div className="flex-1">
                <div>
                  PHỎNG VẤN MAN UNITED - MAN CITY: TEN HAG QUYẾT TÂM VÔ ĐỊCH,
                  PEP GUARDIOLA THẬN TRỌNG PHỎNG VẤN MAN UNITED - MAN CITY: TEN
                </div>
                <span className="rounded-sm border border-[rgba(157,164,222,0.43)] px-1 text-xs">
                  2:30
                </span>
              </div>
              <div className="mr-3 flex flex-row gap-1">
                <button type="button">
                  <MdDeleteOutline />
                </button>
                <button type="button">
                  <CiPlay1 />
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between py-3">
              <img
                className="mx-3 h-[48px]"
                src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
                alt="Thumbnail"
              />
              <div className="flex-1">
                <div>
                  PHỎNG VẤN MAN UNITED - MAN CITY: TEN HAG QUYẾT TÂM VÔ ĐỊCH,
                  PEP GUARDIOLA THẬN TRỌNG
                </div>
                <span className="rounded-sm border border-[rgba(157,164,222,0.43)] px-1 text-xs">
                  2:30
                </span>
              </div>
              <div className="mr-3 flex flex-row gap-1">
                <button type="button">
                  <MdDeleteOutline />
                </button>
                <button type="button">
                  <CiPlay1 />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Queue;
