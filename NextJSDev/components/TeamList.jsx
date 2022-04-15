import styles from "../styles/TeamList.module.css";
import TeamCard from "./TeamCard";

const TeamList = ({ teamList }) => {
  return (
    <div class="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
      <p class="text-center mt-5 text-8xl font-bold text-blue dark:text-white font-BebasNeue">
        Our Team
      </p>
      <p class="text-center mt-5 pb-5 text-xl font-normal text-gray-500 dark:text-gray-200">
        Meet the best team in world!
      </p>

      <div class="flex flex-shrink items-center flex-col md:flex-row justify evenly">
        <div class="p-4">
          <div class="text-center mb-4 opacity-90">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {teamList.map((team) => (
                <TeamCard key={team._id} team={team} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
