import { useState, useRef } from 'react';
import Navbar from "../Navbar/Navbar" 
import "./Download.css";
import "../Home/Home.css";


const Download = () => {
    const [os, setOs] = useState("Windows");
    const installSteps = {
    Mac: [
       <>A Mac version isn't available yet. Check back soon!</>,
    ],
    Linux: [
        <>Click <strong>Download</strong> on the Linux card above to save the game's .zip file.</>,
        <>Extract the .zip file, then open the <strong>BytesOfLove_v1_4-pc</strong> folder inside it.</>,
        <>Open a terminal in that folder and run <strong>./BytesOfLove.sh</strong></>,
        <>If you get a permission error, run <strong>chmod +x BytesOfLove.sh</strong> and try again.</>,
        <>Click <strong>Start</strong> to play!</>,
    ],
    Windows: [
        <>Click <strong>Download</strong> on the Windows card above to save the game's .zip file.</>,
        <>Right-click the .zip file and choose <strong>Extract All</strong>.</>,
        <>Open the extracted folder, then the <strong>BytesOfLove_v1_4-pc</strong> folder inside it.</>,
        <>Double-click <strong>BytesOfLove.exe</strong> to launch the game.</>,
        <>Click <strong>Start</strong> to play!</>,
    ],
    };

    return (
        <div className="download-page-container">
            <Navbar />

            <div className="picture-carousel">
                <img src="download_page_cat_text.png" alt="Download Now" id="heroImage"/>
            </div>
         <div id="download">
                <div id="downloadCol">
                    <div id="macDownload" className="column">
                        <img className="logo" src="images/apple-logo.svg"></img>
                        <h2 id="downloadLabel">Mac</h2>
                        <button id="downloadButton" disabled>
                            <a>Coming Soon</a>
                        </button>
                    </div>

                    <div id="linuxDownload" className="column">
                        <img className="logo" src="images/Linux_logo_PNG4.png"></img>
                        <h2 id="downloadLabel">Linux</h2>
                        <button id="downloadButton" onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')}>
                            <a>Download</a>
                        </button>
                    </div>

                    <div id="windowsDownload" className="column">
                        <img className="logo" src="images/windows-logo.png"></img>
                        <h2 id="downloadLabel">Windows</h2>
                        <button id="downloadButton" onClick={ () => window.open('https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9', '_blank')}>
                            <a>Download</a>
                        </button>
                    </div>

                   
              
                </div>
            </div>
            
             <div className="install-section">
                <h2 className="install-title">How to Install</h2>
                <div className="install-tabs" role="tablist">
                    {Object.keys(installSteps).map((name) => (
                        <button
                            key={name}
                            role="tab"
                            aria-selected={os === name}
                            className={os === name ? "install-tab active" : "install-tab"}
                            onClick={() => setOs(name)}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <ol className="install-steps">
                    {installSteps[os].map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
} 

export default Download
