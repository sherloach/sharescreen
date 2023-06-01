import { Layout } from 'components';
import { ConnectForm, LiveChat, Player, Queue } from 'components/app';

const Home = () => {
  return (
    <Layout>
      <div className="grid">
        <Player />
        <ConnectForm />
        <LiveChat />
      </div>
      <Queue />
    </Layout>
  );
};

export default Home;
