import React, { useContext, useState, createContext, useEffect } from "react";
import YTPlayer, { YTPLAYER_ID } from "./YTPlayer";

type Props = {
  children: React.ReactNode;
  videoId: string;
};

const YTPlayerContext: React.Context<YT.Player | null> = createContext<any>(
  null
);

export const useYTPlayer = () => useContext(YTPlayerContext);

const YTPlayerProvider = (props: Props) => {
  const { children, videoId } = props;
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(() => {
    // @ts-ignore
    YT.ready(() => {
      const playerInst = new YT.Player(YTPLAYER_ID, {
        videoId,
        width: 400,
        height: 225,
        events: {
          onReady: () => {
            setPlayer(playerInst);
          }
        }
      });
    });
  });

  return (
    <YTPlayerContext.Provider value={player}>
      {children}
      <YTPlayer />
    </YTPlayerContext.Provider>
  );
};

export default YTPlayerProvider;

YTPlayerProvider.defaultProps = {
  videoId: ""
};
