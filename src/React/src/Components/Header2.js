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
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import "../styles/globals.css";

function Header() {
  return (
    <div className="sticky top-0 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <img
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 item-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500 flex-shrink" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-4">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">Philip Gehde</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
