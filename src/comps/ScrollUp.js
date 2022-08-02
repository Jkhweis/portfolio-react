import { useState, useEffect } from 'react';

//styles & icons
import './ScrollUp.css';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
}
