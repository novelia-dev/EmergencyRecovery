import React,{useState , useRef, useEffect } from 'react';
import image1 from '../Image/menu-burger (2) 1.png';
import image2 from '../Image/수평로고 (1).png';
import image3 from '../Image/shopping-cart (2) 1.png';
import image4 from '../Image/bell (1) 1.png';
import './MobileNavbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarLinksRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarLinksRef.current && !navbarLinksRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarLinksRef]);

  return (
    <nav className="navbar">
      <img src={image1} alt="image1" className="navbar-toggle" onClick={toggleNavbar} />
        <i className="fa fa-bars"></i>
     
      <ul className={isOpen ? 'navbar-links active' : 'navbar-links'} ref={navbarLinksRef}>
        <li><a href="#" onClick={closeNavbar}>Link 1</a></li>
        <li><a href="#" onClick={closeNavbar}>Link 2</a></li>
        <li><a href="#" onClick={closeNavbar}>Link 3</a></li>
      </ul>
      <img src= {image1} alt="image1" className={isOpen ? 'navbar-close active' : 'navbar-close'} onClick={closeNavbar}/>
        <i className="fa fa-times"></i>
     
    </nav>
  );
};


// function MobileNavbar(){
    
//    return(
//         <div>
            
//             <table>
//                 <td style={{positon:"absolute"}}><Navbar/></td>
//                 <td><img src={image2} alt="image2" /></td>
//                 <td><img src={image3} alt="image3" /></td>
//                 <td><img src={image4} alt="image4 "/></td>
//             </table>
//         </div>
//     )
// } */

export default Navbar;