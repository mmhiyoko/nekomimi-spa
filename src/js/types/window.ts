export type OnYouTubeIframeAPIReady = () => void;

declare global {
  interface Window {
    onYouTubeIframeAPIReady: OnYouTubeIframeAPIReady;
  }
}
