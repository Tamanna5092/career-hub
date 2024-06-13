import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-5xl font-extrabold text-center mb-4">
          Featured Jobs
        </h1>
        <p className="text-[#757575] font-medium text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
        </div>
        <div className="mt-10 mb-32 text-center">
        <div className={dataLength === jobs.length ? 'hidden' : ''}>
          <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-white font-extrabold text-center px-7 py-4">Show All Jobs</button>
        </div>
        </div>
    </div>
  );
};

export default FeaturedJobs;
