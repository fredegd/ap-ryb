import './BackgroundAnimation.css';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimation = () => {
  const { theme } = useTheme();

  return (
    <div className={`background-animation ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>
    </div>
  );
};

export default BackgroundAnimation;
