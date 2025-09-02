import { Link } from 'react-router-dom';
import { FaComputer } from "react-icons/fa6";
import { FaCamera, FaHeadphones, FaHome, FaMobile, FaTv } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';

export const CategoryItems = [
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
          <FaComputer color='#FF624C' /> Computers & Tablets
        </Link>
      ),
      key: '0',
    },

    {
        type:"divider",
    },

    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
          <FaMobile color='#FF624C' /> Mobile & Accessories
        </Link>
      ),
      key: '1',
    },
    
    {
        type:"divider",
    },
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
          <FaTv color='#FF624C' /> TV & Home Theater
        </Link>
      ),
      key: '3',
    },
    
    {
        type:"divider",
    },
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
          <FaHeadphones color='#FF624C' /> Audio & Headphones
        </Link>
      ),
      key: '4',
    },
    
    {
        type:"divider",
    },
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
          <FaCamera color='#FF624C' /> Cameras & Camcorders
        </Link>
      ),
      key: '5',
    },
    
    {
        type:"divider",
    },
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
         <SiYoutubegaming color='#FF624C' /> Gaming Equipment
        </Link>
      ),
      key: '6',
    },
    
    {
        type:"divider",
    },
    
    {
      label: (
        <Link to="/product"  className="font-montserrat font-normal text-base text-black01 flex items-center gap-1.5">
         <FaHome color='#FF624C' /> Home Appliances
        </Link>
      ),
      key: '7',
    },

  ];