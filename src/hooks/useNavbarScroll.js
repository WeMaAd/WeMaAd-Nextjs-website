import { useEffect } from "react";

export const useNavbarScroll = (ref) => {
  useEffect(() => {
    const navbar = ref.current;
    if (!navbar) return;
    const handleScroll = () => {
      navbar.classList.toggle("nav-scroll", window.pageYOffset > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);
};
