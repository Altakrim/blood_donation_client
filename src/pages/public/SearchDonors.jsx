// // import { useEffect, useState } from "react";
// import axios from "axios";
// import Loading from "../../components/Loading";
import Loading from "../components/Loader";

import axios from "axios";
import { useState } from "react";

const SearchDonors = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/donors?bloodGroup=${bloodGroup}`)
      .then(res => {
        setDonors(res.data);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Donors</h2>

      <select
        className="select select-bordered"
        onChange={(e) => setBloodGroup(e.target.value)}
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
      </select>

      <button onClick={handleSearch} className="btn btn-error ml-2">
        Search
      </button>

      {Loading && <Loading />}

      {donors.map(donor => (
        <div key={donor._id} className="border p-3 mt-3 rounded">
          <p><b>Name:</b> {donor.name}</p>
          <p><b>Blood:</b> {donor.bloodGroup}</p>
          <p><b>District:</b> {donor.district}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchDonors;
