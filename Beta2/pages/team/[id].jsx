//import styles from "../../styles/Team.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import TeamMemberCard from "../../components/TeamMemberCard";

const Team = ({ team }) => {
  return (
    <div>
      <TeamMemberCard key={team._id} team={team} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  // const res = await axios.get(`http://localhost:3000/api/team/${params.id}`);

  const res = await axios.get(
    `https://cranky-banach-68238c.netlify.app/api/team/${params.id}`
  );
  return {
    props: {
      team: res.data,
    },
  };
};

export default Team;
