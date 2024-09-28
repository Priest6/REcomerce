import React, { useState } from "react";
import "./liveChat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false);
  const toggle = () => {
    setShowChat(!showChat);
  };

  //render
  return (
    <div>
      {showChat && (
        <div className="containerLivechat">
          <div className="livechat_title">
            <h5>Customer Support</h5>
            <div className="">let's Chat App</div>
          </div>
          <div className="livechat_content"></div>
          <div className="livechat_content_messager">
            <i className="livechat_content_admin_icon">👩🏻‍💼</i>
            <input
              type="text"
              placeholder="Enter Message!"
              className="livechat_content_input"
            />
            <FontAwesomeIcon icon={faPaperclip} />
            <i className="livechat_content_messager">🙂🚀</i>
          </div>
        </div>
      )}
      {/* -------show--hide Livechat----------- */}
      <button className="livechat_content_button" onClick={toggle}>
        💬
      </button>
    </div>
  );
};

export default LiveChat;
