import { Layout } from 'components';
import { ConnectForm, LiveChat, Player, Queue } from 'components/app';

const Home = () => {
  return (
    <Layout>
      <div className="col-span-2">
        <Player />
        <Queue />
      </div>
      <div className="h-full">
        <ConnectForm />
        <LiveChat />
      </div>
    </Layout>
  );
};

export default Home;
