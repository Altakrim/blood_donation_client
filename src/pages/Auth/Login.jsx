
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     try {
//       const result = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
// // user email 
// axios.post("http://localhost:5000/jwt", { email: user.email })
//   .then(res => {
//     localStorage.setItem("access-token", res.data.token);
//   });
//       const user = result.user;
//       console.log("Logged in user:", user);

//       const res = await fetch("http://localhost:5000/jwt", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({email: user.email}),

        
//       });
//       const data = await res.json();

//       localStorage.setItem("access-token", data.token);
         
//       // later: JWT generate here
//       navigate("/");

//     } catch (err) {
//       setError(err.message);
//     }


//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//         <h1 className="text-3xl font-bold text-center p-5">Login</h1>

//         <form onSubmit={handleLogin} className="card-body">
//           <label className="label">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="input input-bordered"
//             required
//           />

//           <label className="label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="input input-bordered"
//             required
//           />

//           {error && <p className="text-red-500">{error}</p>}

//           <button className="btn btn-neutral mt-4">Login</button>
//         </form>

//         <p className="text-center pb-4">
//           New here?
//           <Link to="/register" className="text-secondary pl-1">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // ✅ Firebase login
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("Logged in user:", user);

      // ✅ JWT generate (ONLY ONCE)
      const res = await axios.post(
        "http://localhost:5000/users/jwt",
        { email: user.email }
      );

      // ✅ Save token
      localStorage.setItem("access-token", res.data.token);

      // ✅ Redirect after login
      navigate("/");

    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h1 className="text-3xl font-bold text-center p-5">Login</h1>

        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p className="text-center pb-4">
          New here?
          <Link to="/register" className="text-secondary pl-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

