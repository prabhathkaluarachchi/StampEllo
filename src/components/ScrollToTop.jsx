import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react"; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
      <ArrowUpCircle size={36} />
    </div>
  );
};

export default ScrollToTop;
