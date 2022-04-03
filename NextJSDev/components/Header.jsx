import Image from "next/image";
import Link from "next/link";

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

const Header = () => {
  return (
    <div className="sticky top-0 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image alt="" src="/icon.png" width={30} height={50} layout="" />
        <div className="flex ml-10 item-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500 flex-shrink" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Services"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-4">
          <Link href="/">
            <a>
              <HeaderIcon active Icon={HomeIcon} title="Home" />
            </a>
          </Link>

          <Link href="/team">
            <a>
              <HeaderIcon Icon={UserGroupIcon} title="The Team" />
            </a>
          </Link>

          <HeaderIcon Icon={ShieldCheckIcon} title="Insurance" />
          <HeaderIcon Icon={LocationMarkerIcon} title="Your Location" />
          <HeaderIcon Icon={ChevronDoubleDownIcon} title="Services" />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">Philip Gehde</p>
        <ViewGridIcon className="icon" />

        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
