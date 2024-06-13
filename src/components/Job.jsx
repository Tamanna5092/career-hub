import React from "react";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
        <div className="space-x-4">
          <button className="text-[#7E90FE] px-5 py-3 border border-[#7E90FE] font-extrabold rounded">{remote_or_onsite}</button>
          <button className="text-[#7E90FE] px-5 py-3 border border-[#7E90FE] font-extrabold rounded">{job_type}</button>
        </div>
        <div className="flex gap-6 text-[#757575] my-6 text-xl font-semibold">
          <h2 className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h2>
          <h2 className="flex"><CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-white font-extrabold">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
