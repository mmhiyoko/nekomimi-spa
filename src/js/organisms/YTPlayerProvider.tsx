import React, { useContext, useState, createContext, useEffect } from "react";
import YTPlayer, { YTPLAYER_ID } from "./YTPlayer";
import { PlayerState } from "../constants/PlayerState";

type Props = {
  children: React.ReactNode;
  videoId: string;
};

type ContextValue = {
  player: YT.Player | null;
  playerState: PlayerState;
};

const YTPlayerContext: React.Context<ContextValue> = createContext<any>(null);

export const useYTPlayer = () => useContext(YTPlayerContext);

const insertIFrameAPITag = () => {
  const scriptEl = document.createElement("script");
  scriptEl.src = "https://www.youtube.com/iframe_api";
  scriptEl.async = true;
  const firstScriptTag = document.getElementsByTagName("script")[0];
  // eslint-disable-next-line
  firstScriptTag.parentNode?.insertBefore(scriptEl, firstScriptTag);
};

const YTPlayerProvider = (props: Props) => {
  const { children, videoId } = props;
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>(
    PlayerState.UNSTARTED
  );
  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
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
    };
    insertIFrameAPITag();
  }, []);

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
