import React from 'react';
import videoSrc from '../../assets/video.mp4';
/*Adicione funcionalidades ao player de vídeo:

1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
2 - Função para avançar o vídeo em +2s.
3 - Função para alterar o playbackRate do vídeo.
4 - Função para entrar/sair do modo pictureInPicture.
5 - Função para alternar o som (mudo/não mudo) do vídeo.*/

const ExercicioUseRefTSX = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState<boolean>(false);
  function foward() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }
  function changePlayBackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }
  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }
  async function piP() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else await video.current.requestPictureInPicture();
  }
  React.useEffect(() => {
    if (video.current) {
      switch (playing) {
        case true:
          video.current.play();
          break;
        case false:
          video.current.pause();
          break;
        default:
          video.current.play();
          break;
      }
    }
  }, [playing]);

  return (
    <div>
      <div className="flex">
        <button onClick={() => setPlaying((playing) => !playing)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={foward}>+2</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={mute}>Mute</button>
        <button onClick={piP}>PiP</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => {
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};

export default ExercicioUseRefTSX;
