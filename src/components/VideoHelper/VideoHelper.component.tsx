import { useState } from "react";
import Separator from "../Separator/Separator.component";

import "./VideoHelper.component.scss";

const VideoHelper = (props: any) => {
  const {
    hanlerTitle,
    title,
    description,
    videoUrl,
    colorScheme,
  }: {
    hanlerTitle: string,
    title: string,
    description: string,
    videoUrl: string,
    colorScheme: {
      backgroundColor: string,
      textColor: string,
    },
  } = props;

  const [currentState, setCurrentState] = useState("hidden");

  return <>
    <div className="VideoHelper">
      {currentState === "hidden" && <>
        <div
          className="popupHandler"
          style={{
              backgroundColor: colorScheme.backgroundColor,
              color: colorScheme.textColor,
          }}
          onClick={() => setCurrentState("visible")}>
            <strong>
              <i className="fas fa-question-circle me-2"></i> {hanlerTitle || "Need help?"}
            </strong>
        </div>
      </>}

      {currentState === "visible" && <>
        <div
          className="popup"
          style={{
            backgroundColor: colorScheme.backgroundColor,
            color: colorScheme.textColor,
          }}>
            <div className="row align-items-center">
              <div className="col">
                <strong>{title || ""}</strong>
              </div>
              <div className="col-1 text-end">
                <i
                  className="fas fa-times close"
                  onClick={() => setCurrentState("hidden")}></i>
              </div>
            </div>

            <Separator size={7} />

            <small>{description || ""}</small>

            <Separator size={14} />

            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={videoUrl}
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                width={560}
                height={315}
              ></iframe>
            </div>
        </div>
      </>}
    </div>
  </>
};

export default VideoHelper;