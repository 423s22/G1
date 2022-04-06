import { useRouter } from "next/router";
import { Fragment } from "react";

function TeamPage(){
    const router = useRouter();

    const newId = router.query.teamId;

    return <Fragment>
        <h1>Hello</h1>
    </Fragment>
}

export default TeamPage;