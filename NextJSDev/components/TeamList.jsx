import styles from "../styles/TeamList.module.css";
import TeamCard from "./TeamCard";

const TeamList = ({ teamList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Team</h1>
      <p className={styles.desc}>
        This Data is coming from our MongoDB datatabase using the Team data
        Model.
      </p>
      <div className={styles.wrapper}>
        {teamList.map((team) => (
          <TeamCard key={team._id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
