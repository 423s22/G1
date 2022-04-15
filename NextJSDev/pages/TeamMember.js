import axios from "axios";

import TeamMemberPage from "../components/TeamMemberPage";

export default function Home({ TeamMemberPage }) {
  return (
    <div>
      <TeamMemberPage TeamMemberPage={TeamMemberPage} />
    </div>
  );
}

