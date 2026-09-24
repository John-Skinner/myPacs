import React, {useState} from 'react';
import OhifFrame from './OhifFrame.tsx'
import './App.css';


function App() {
    const createUrlParams = () => {


      let hpParam = '';
        if (protocol.length > 0) {
          hpParam = '&hangingprotocolid=' + protocol;
        }
        const params = "mu=" + encodeURIComponent(unitOfMeasure) +
            '&viewerMode=' + encodeURIComponent(mode) +
            '&cs=' + encodeURIComponent(cacheSize.toString()) +
            '&autoSave=' + autoSave +
            hpParam +
            '&dwt=MoC';
        return params;
    }
    const [ohifLaunched, setOhifLaunched] = useState(false);
    const [mode, setMode] = useState('');
    const [unitOfMeasure, setUnitOfMeasure] = useState('');
    const [cacheSize, setCacheSize] = useState(0.0);
    const [autoSave, setAutoSave] = useState('true');
    const [protocol, setProtocol] = useState('');

    const doLaunch = () => {
      console.log(`start collecting params`);

        let ele = document.getElementById('modeId') as HTMLSelectElement;
        setMode(ele.value);
        ele = document.getElementById('unitOfFMeasureId') as HTMLSelectElement;
        setUnitOfMeasure(ele.value);
        ele = document.getElementById('modeId') as HTMLSelectElement;
        setMode(ele.value);
        let inputEle = document.getElementById('hangingProtocolId') as HTMLInputElement;
        setProtocol(inputEle.value);
        const numele = document.getElementById('cacheSizeID') as HTMLInputElement;
        //
        // The moc ui is in bytes, but the user settings in gigs.
        // scale down to match the unit-of-measure of gigs for the
        // cs param.
        //
        const numInGigs = Number.parseInt(numele.value)/(1024*1024*1024);
        setCacheSize(numInGigs);
        console.log(`window:${window.location.host}`);
        setOhifLaunched(true);

    }
    if (ohifLaunched) {
        const url = `http://${window.location.host}/ohifv3?${createUrlParams()}`;
        console.log(`params:${url}`);
        let params = url;
        console.log('rendering...');
        return (
            <div className="App">
                <>
                    <ul>
                        <li> mu:{unitOfMeasure}</li>
                        <li> cache:{cacheSize}</li>
                        <li> mode:{mode}</li>
                        <li> protocol: {protocol}</li>
                    </ul>



                <div id="framecontainer">
                    <h3> OHIF </h3>
                    <OhifFrame url={params}></OhifFrame>
                </div>
                    </>
            </div>
        );
    }
    const handleAutoSave = (e) => {
      if (e.target.checked) {
        setAutoSave('true');
      }
      else {
        setAutoSave('false');
      }
    }
    console.log("start app render")
    return (
      <div className="App">
        <p>Stub for the launch of OHIF</p>
        <select
          name=" unit of measure"
          id="unitOfFMeasureId"
          defaultValue="mm"
        >
          <option value="mm">Millimeter</option>
          <option value="cm">Centimeter</option>
        </select>
        <select
          name="mode"
          id="modeId"
          defaultValue="full"
        >
          <option value="full">Full</option>
          <option value="lite">Lite</option>
        </select>
        <label> AutoSave On
          <input
            type="checkbox"
            id="autoSaveID"
            checked={autoSave === 'true'}
            onChange={handleAutoSave}
          ></input>

        </label>

        <label form="cacheSizeID"> Cache Size Bytes:</label>
        <input
          id="cacheSizeID"
          type="number"
          width="20"
          defaultValue="1500000000"
        ></input>
        <label form="hangingProtocol"> Hanging Protocol name:</label>
        <input
          id="hangingProtocolId"
          type="text"
          width="40"
          defaultValue="findBest"
        ></input>
        <button onClick={doLaunch}>Launch OHIF</button>
      </div>
    );
}

export default App;
