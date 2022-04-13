import Image from "next/image";
import Link from "next/link";
import react, {useState} from "react";
import ServiceDropdown from "./ServiceDropdown";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LocationMarkerIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { Button } from "semantic-ui-react";


const Header = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="sticky top-0 bg-beige flex items-center p-2 lg:px-5 shadow-md">
      <Image alt="" src="/icon.png" width={45} height={108} layout="" />
      <div className="flex justify-left flex-grow">
        <div className="flex space-x-6 md:space-x-4">
          <Link href="/">
            <a  className="hover:text-orange">
              <HeaderIcon active Icon={HomeIcon} title="Home" />
            </a>
          </Link>

          <Link href="/team">
            <a  className="hover:text-orange">
              <HeaderIcon Icon={UserGroupIcon} title="The Team" />
            </a>
          </Link>
          <button  className="hover:text-orange" onClick={() => setVisibility(!visibility)}>
          <HeaderIcon  Icon={ChevronDoubleDownIcon} title="Services"/>
          </button>
         
        </div> 
      </div>
      

      <div className="flex items-center sm:space-x-2 justify-end">
  <div className="flex items-center">
      
        <div className="flex ml-10 item-center rounded-full bg-grey-100 p-2">
          <SearchIcon className="h-6 text-grey-500 flex-shrink" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Services"
          />
        </div>
      </div>
      </div>
       <div>
              {
            visibility?<ServiceDropdown/>:null
          }
        </div>
    </div>

  );
};

export default Header;
