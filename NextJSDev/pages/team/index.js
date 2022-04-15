import axios from "axios";

import TeamList from "../../components/TeamList";
import styles from "../../styles/TeamList.module.css";

export default function Home({ teamList }) {
  return (
    <div className={styles.container}>
      <TeamList teamList={teamList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/team");
  return {
    props: {
      teamList: res.data,
    },
  };
};
