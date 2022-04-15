//import styles from "../../styles/Team.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Team = ({ team }) => {
  return <div>{team.name}</div>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/team/${params.id}`);
  return {
    props: {
      team: res.data,
    },
  };
};

export default Team;
