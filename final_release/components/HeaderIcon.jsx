function HeaderIcon({ Icon, active, title }) {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl
    active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
      <p className="hidden md:flex whitespace-nowrap font-semibold p-3 indent-1 ">
        {title}
      </p>
    </div>
  );
}

export default HeaderIcon;
