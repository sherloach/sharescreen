import YouTube, { YouTubeProps } from 'react-youtube';

const Player = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="h-[400px]">
      <YouTube videoId="3_JE76PKBWE" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default Player;
