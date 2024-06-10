import { useState } from 'react';
import './index.css';

const DisplayConfiguration = () => {
  const [primaryColor, setPrimaryColor] = useState('#7e22ce');
  const [fontColor, setFontCOlor] = useState('#000000');

  return (
    <div className="display-config-container">
      <div className="display-container">
        <div className="section">
          <div className="inner-section-one">
            <label className="display-config-label">Primary Color</label>
            <div className="input-color-container">
              <input
                type="text"
                className="input-container display-input"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
              <div className="color-box" style={{ backgroundColor: primaryColor }}></div>
            </div>
            <p className="display-config-msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ma
            </p>
          </div>

          <div className="inner-section-two">
            <label className="display-config-label">Font Color</label>
            <div className="input-color-container">
              <input
                type="text"
                className="input-container display-input"
                value={fontColor}
                onChange={(e) => setFontCOlor(e.target.value)}
              />
              <div className="color-box" style={{ backgroundColor: fontColor }}></div>
            </div>
            <p className="display-config-msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ma
            </p>
          </div>
        </div>

        <div className="section">
          <div className="inner-section-one">
            <label className="display-config-label">Font Size (in px)</label>
            <div className="input-color-container">
              <input type="text" className="input-container" style={{ margin: '4px 0px' }} />
            </div>
          </div>

          <div className="inner-section-two">
            <label className="display-config-label">Chat Height (in % of total screen)</label>
            <div className="input-color-container">
              <input type="text" className="input-container" style={{ margin: '4px 0px' }} />
            </div>
            <p className="display-config-msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ma
            </p>
          </div>
        </div>

        <div className="section-three">
          <div>
            <h1 className="switch-main-text-heading">Show Sources</h1>
            <p className="display-config-msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ma
            </p>
          </div>

          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      {/* <hr className="line-sperator" /> */}

      {/* <div className="chat-container">
        <div className="section-two">
          <h1>Chat Icon</h1>
          <div>
            <div>
              <label>Chat Icon Size</label>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DisplayConfiguration;
