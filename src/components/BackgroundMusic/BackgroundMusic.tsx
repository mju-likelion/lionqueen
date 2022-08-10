import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from '~components/icons/Sound';

const BackgroundMusic = () => {
  const [isPlay, setIsPlay] = useState(true);

  const [audio] = useState(
    typeof Audio !== 'undefined' &&
      new Audio('https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori'),
  );

  const onClick = () => {
    if (isPlay === true) {
      setIsPlay(false);
      audio.pause();
    } else {
      setIsPlay(true);
      audio.play();
    }
  };

  return (
    <div>
      <SoundBtn type="button" onClick={onClick}>
        <Sound />
      </SoundBtn>
    </div>
  );
};

const SoundBtn = styled.button`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  margin: 40px 0 0 50px;
  cursor: pointer;
  width: 100px;
  height: 70px;
`;

export default BackgroundMusic;
