import Image from "next/image";
import styles from "../styles/TeamCard.module.css";
import Link from "next/link";

const TeamCard = ({ team }) => {
  return (
    <div className={styles.container}>
      <Link href={`/team/${team._id}`} passHref>
        <Image src={team.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{team.name}</h1>

      <p className={styles.desc}>{team.bio}</p>
      <p className={styles.desc}>{team.role}</p>
    </div>
  );
};

export default TeamCard;
