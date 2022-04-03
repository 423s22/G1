import axios from "axios";

import TeamList from "../../components/TeamList";
import styles from "../../styles/TeamList.module.css";

export default function Home({ teamList }) {
  return (
    <h1>Team Page</h1>
    <div className={styles.container}>
      <TeamList teamList={teamList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://cranky-banach-68238c.netlify.app/api/team"
  );
  return {
    props: {
      teamList: res.data,
    },
  };
};
