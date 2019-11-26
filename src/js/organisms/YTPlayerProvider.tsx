import React, { useContext, useState, createContext, useEffect } from "react";
import YTPlayer, { YTPLAYER_ID } from "./YTPlayer";
import { PlayerState } from "../constants/PlayerState";

type Props = {
  children: React.ReactNode;
  videoId: string;
};

type ContextValue = {
  player: YTPlayerProvider | null;
  playerState: PlayerState;
};

const YTPlayerContext: React.Context<ContextValue> = createContext<any>(null);

export const useYTPlayer = () => useContext(YTPlayerContext);

const YTPlayerProvider = (props: Props) => {
  const { children, videoId } = props;
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>(
    PlayerState.UNSTARTED
  );
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
          },
          onStateChange: (e: any) => {
            setPlayerState(e.data as number); // @todo numberでいいのどうしてかいつか調べたい
          }
        }
      });
    });
  });

  return (
    <YTPlayerContext.Provider value={{ player, playerState }}>
      {children}
      <YTPlayer />
    </YTPlayerContext.Provider>
  );
};

export default YTPlayerProvider;

YTPlayerProvider.defaultProps = {
  videoId: ""
};
