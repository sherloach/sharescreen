import { MdDeleteOutline } from 'react-icons/md';

interface IQueueItem {
  title: string;
  thumbnail: string;
  time: string;
}

const QueueItem: React.FC<IQueueItem> = ({ title, thumbnail, time }) => {
  return (
    <li className="border-be-ytb-item flex cursor-pointer items-center justify-between py-3 last:border-none">
      <img className="mx-3 h-[48px]" src={thumbnail} alt="Thumbnail" />
      <div className="flex-1">
        <div>{title}</div>
        <span className="rounded-sm border border-[rgba(157,164,222,0.43)] px-1 text-xs">
          {time}
        </span>
      </div>
      <div className="mr-3 flex flex-row gap-1">
        <button type="button">
          <MdDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default QueueItem;
