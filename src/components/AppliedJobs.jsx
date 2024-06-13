import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import { CiDollar, CiLocationOn } from "react-icons/ci";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

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
      setDisplayJobs(jobsApplied);
      // console.log(jobs, jobsApplied, jobsApplied)
    }
  }, [jobs]);

  return (
    <div>
      <h1 className="text-2xl text-center bg-gradient-to-r from-[#7E90FE0D] from-0% to-[#9873FF0D] to-100% py-28">
        Applied Jobs: {appliedJobs.length}
      </h1>
      <details className="dropdown justify-end">
        <summary className="btn my-8">Filter By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}> 
            <div className="flex flex-col lg:flex-row my-4 p-6 border">
              <div className="h-60 w-60 bg-base-200 text-center">
                <img
                  className="rounded-lg shadow-2xl "
                  src={job.logo}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between w-full md:flex-row lg:flex-row ml-8">
                <div className="p-4">
                  <h1 className="text-2xl font-extrabold">{job.job_title}</h1>
                  <p className="text-xl font-semibold text-[#757575] my-4">{job.company_name}</p>
                  <button className="btn bg-white text-[#7E90FE] border-[#7E90FE] mr-2 px-6">
                    {job.remote_or_onsite}
                  </button>
                  <button className="btn bg-white text-[#7E90FE] border-[#7E90FE] px-6">
                    {job.job_type}
                  </button>
                  <div className="flex gap-6 text-[#757575] text-xl font-semibold my-4">
                    <h2 className="flex">
                      <CiLocationOn className="text-2xl mr-2"></CiLocationOn>
                      {job.location}
                    </h2>
                    <h2 className="flex">
                      <CiDollar className="text-2xl mr-2"></CiDollar>
                      {job.salary}
                    </h2>
                  </div>
                </div>
                <div className="top-50% text-center items-center justify-center">
                  <button className="bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-white font-extrabold py-4 px-6 rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
