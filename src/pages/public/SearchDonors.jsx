// // import { useEffect, useState } from "react";
// import axios from "axios";
// import Loading from "../../components/Loading";
import Loading from "../../components/Loader";

import axios from "axios";
import { useState } from "react";

const SearchDonors = () => {
  const [formData, setFormDate] = useState({
    bloodGroup: "",
    district: "",
    upazila: "",
  });
  const [donors, setDonors] = useState([]);
  const [searched, setSearched] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormDate({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearched(true);
    setLoading(true);

    try {
      const res = await axios.get("http://localhost:5000/donations/donors", {
        params: formData,
      });
      setDonors(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6x1 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Blood Donors Donors</h2>
      {/* Search Form  */}
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {/* Blood Grope  */}
        <select
          name="bloodGroup"
          className="select select-bordered"
          onChange={handleChange}
        >
          <option value="">Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
          {/* <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option> */}
        </select>

        {/* District  */}
        <select
          name="district"
          className="select select-bordered"
          onChange={handleChange}
        >
          <option value="">District</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Comila">Comila</option>
        </select>

        {/* Upazila  */}

        <select
          name="upazila"
          className="select select-bordered"
          onChange={handleChange}
        >
          <option value="">Upazila</option>
          <option value="Mirpur">Mirpur</option>

          <option value="Mirsorai">Mirsorai</option>
        </select>

        <button className="btn btn-primary">Search</button>
      </form>
         {/* Result Section  */}
      {Loading && <Loading />}

      {searched && (
        <div className="mt-8">
          {donors.length === 0 ? (
            <p className="text-center text-gray-500">No donors found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {donors.map(donor => (
                <div key={donor._id} className="card bg-base-100 shadow-md p-4">
                  <h3 className="font-bold">{donor.name}</h3>
                  <p>Blood: {donor.bloodGroup}</p>
                  <p>District: {donor.district}</p>
                  <p>Upazila: {donor.upazila}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDonors;
