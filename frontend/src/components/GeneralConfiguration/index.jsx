import './index.css';

const GeneralConfiguration = () => {
  return (
    <div>
      <label className="general-config-label">Chatbot Name</label>
      <input className="input-container general-config-input" type="text" />
      <p className="general-config-msg">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>

      <label className="general-config-label">Welcome Message</label>
      <input className="input-container general-config-input" type="text" />
      <p className="general-config-msg">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>

      <label className="general-config-label">Input Placeholder</label>
      <input className="input-container general-config-input" type="text" />
      <p className="general-config-msg">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
    </div>
  );
};

export default GeneralConfiguration;
