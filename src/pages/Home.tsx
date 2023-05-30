import { Layout } from 'components';
import { ConnectForm, LiveChat, Player, Queue } from 'components/app';

const Home = () => {
  return (
    <Layout>
      <Player />
      <ConnectForm />
      <LiveChat />
      <Queue />
    </Layout>
  );
};

export default Home;
