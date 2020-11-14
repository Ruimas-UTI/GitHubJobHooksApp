import React, {useState} from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import {  Container  } from "react-bootstrap";
import JobCard from "./JobCard";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

const App = () =>{
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
    const handleParamChange = e => {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }
    return(
        <Container className="my-4">
            <h1 className="mb-4">GitHub Jobs</h1>
            <SearchForm params={params} onParamChange={handleParamChange}/>
            <JobsPagination page={page} setPage={setPage}/>
            {loading && <li>Loading...</li>}
            {error && <li>Error</li>}
            {jobs.map((job) => {
                return <JobCard key={job.id} job={job}></JobCard>
            })}
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </Container>
    )
}
export default App;