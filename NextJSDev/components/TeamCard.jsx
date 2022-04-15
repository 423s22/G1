import Image from "next/image";
import styles from "../styles/TeamCard.module.css";
import Link from "next/link";

const TeamCard = ({ team }) => {
  return (
    <div class="p-4 rounded-lg border-2 border-gray-100 drop-shadow-md shadow-black-100">
      <div class="text-center mb-4 opacity-90">
        <Link href={`/team/${team._id}`} passHref>
          <img
            alt="profil"
            src={team.img}
            class="hover:cursor-pointer mx-auto object-cover rounded-full h-40 w-40 border-4 border-orange-400 shadow-lg shadow-black-100 hover:shadow-black-300 hover:border-orange-600"
          />
        </Link>
      </div>
      <div class="text-center">
        <p class="text-2xl text-gray-800 dark:text-white">{team.name}</p>
        <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
          {team.role}
        </p>
        <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
          {team.bio}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
