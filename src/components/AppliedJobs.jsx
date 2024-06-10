import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    }
    else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs)
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
      // console.log(jobs, jobsApplied, jobsApplied)
    }
  }, [jobs]);

  return (
    <div>
      <h1 className="text-2xl text-center">
        Applied Jobs: {appliedJobs.length}
      </h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name} : {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
    // <div className="hero h-fit bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row">
    //     <img
    //       src={appliedJobs.logo}
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div>
    //       <h1 className="text-5xl font-bold">{title}</h1>
    //       <p className="py-6">
    //         Provident
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AppliedJobs;
