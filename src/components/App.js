import React, {useState} from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import {  Container  } from "react-bootstrap";
import JobCard from "./JobCard";

const App = () =>{
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error } = useFetchJobs(params, page);
    return(
        <Container>
            {loading && <li>Loading...</li>}
            {error && <li>Error</li>}
            {jobs.map((job) => {
                return <JobCard key={job.id} job={job}></JobCard>
            })}
        </Container>
    )
}
export default App;