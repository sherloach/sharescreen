import { Layout } from 'components';
import { ConnectForm, LiveChat, Player, Queue } from 'components/app';

const Home = () => {
  return (
    <Layout>
      <div className="grid h-full w-full grid-cols-1 gap-2 md:grid-cols-3">
        <div className="col-span-2 flex flex-grow flex-col">
          <Player />
          <Queue />
        </div>
        <div className="flex flex-col">
          <ConnectForm />
          <LiveChat />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
