import React from 'react';
import videoSrc from '../../assets/video.mp4';
const UseRefTSX = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    console.log(video.current);
  }, []);
  return (
    <div>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
};

export default UseRefTSX;
