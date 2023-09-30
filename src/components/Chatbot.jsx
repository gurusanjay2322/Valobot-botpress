import React, { useEffect,useState } from "react";
import { Loading } from "./Loading";
import "../index.css";
const Chatbot =()=>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return <div id='webchat'>{loading ? <Loading /> : <BotFrame />}</div>;
};
const BotFrame = ()=>{
  return(
  <div className='center-div'>
        <iframe
          style={{ border: "none",}}
          srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'Valo',
                  'botName': 'ValoBot',
                  'botId': 'f2799b7a-9f91-4e86-a81e-9fca9aee8dd7',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'f2799b7a-9f91-4e86-a81e-9fca9aee8dd7',
                  'enableConversationDeletion': true,
                  'showPoweredBy': false,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  useSessionStorage: true,
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
          width='100%'
          height='100%'></iframe>
      </div>
  )
}

export default Chatbot;

// botId: 'f2799b7a-9f91-4e86-a81e-9fca9aee8dd7',
