import React, { useState } from 'react';
import {useRef} from 'react';
import './OhifFrame.css';
import './windowMessage'
import { sendHandshakeMessage } from './windowMessage';
export default function OhifFrame(props) {
  const autoclose = () => {
    let msgWindow = iFrameRef.current.contentWindow;
    setWindowStatus('pending');
    sendHandshakeMessage(msgWindow,5000).
      then(res=>{
        setWindowStatus('closed');
        console.log('ohif viewer is closed.');
    })
  }
  const iFrameRef = useRef(null);
    let [windowStatus, setWindowStatus] = useState('pending');
    return (
      <div className="OhifFrame">

        <button
          onClick={autoclose}
          type="button"
        >
          Close OHIF Viewer
        </button>
        <h4> {windowStatus}</h4>

        <p>
          <iframe ref={iFrameRef}
            className="OhifFrameClass"
            src={props.url}
          ></iframe>
        </p>
      </div>
    );
}
