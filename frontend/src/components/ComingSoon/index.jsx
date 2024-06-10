import './index.css';

import lamaLogo from '../../assets/images/svg/lamaLogo.svg';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="logo-container">
        <img src={lamaLogo} alt="logo" />
        <h1 className="logo-name">LAMA.</h1>
      </div>
      <h1 className="coming-soon-text">Coming Soon...</h1>
    </div>
  );
};

export default ComingSoon;
