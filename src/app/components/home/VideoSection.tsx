import { useState } from "react";
import { Play } from "lucide-react";
import { Container, Reveal, SectionPanel, TwoTone } from "./primitives";
import videoPoster from "../../../assets/video_img.png";

/**
 * Demo video source. There is no home-page walkthrough video in the repo yet,
 * so the card shows the product poster only. Set this (e.g. "/videos/demo.mp4")
 * and the play button appears and swaps the poster for an inline player.
 */
const DEMO_VIDEO_SRC: string | null = null;

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const src = DEMO_VIDEO_SRC as string | null;

  return (
    <SectionPanel tone="white" aria-labelledby="video-heading">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex max-w-[760px] flex-col items-center gap-5">
          <TwoTone id="video-heading" lead="See it" rest="in action." />
          <p className="hv-lead max-w-[620px]">
            See how Loraloop runs content, ads and reporting for a scaling brand, end to end.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16 w-full max-w-[1100px]" delay={0.05}>
          {/* Gradient border: 2px of the contour green around the media */}
          <div className="rounded-[24px] md:rounded-[36px] bg-[linear-gradient(135deg,#3f9a3a,#8fdc8a_50%,#cfe9d3)] p-[2px]">
            <div className="relative aspect-video overflow-hidden rounded-[22px] md:rounded-[34px] bg-[#f9f3ed]">
              {src && playing ? (
                <video
                  className="absolute inset-0 size-full object-cover"
                  src={src}
                  poster={videoPoster}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={videoPoster}
                    alt="The Loraloop app: Lora proposes today's social content for your approval"
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {src && (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="Play the Loraloop walkthrough video"
                      className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#094413] text-[#f9f3ed] shadow-[0_12px_40px_rgba(9,68,19,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <Play className="ml-1 size-8" fill="currentColor" aria-hidden="true" />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
