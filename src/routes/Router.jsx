import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/HomePage/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRouter";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import DonorRoute from "./DonorRoute";
import CreateDonationRequest from "../pages/Donor/CreateDonationRequest";
import MyDonationRequests from "../pages/Donor/MyDonationRequests";
import UpdateDonationRequest from "../pages/Donor/UpdateDonationRequest";
import AdminRouter from "./AdminRouter";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AllUsers from "../pages/Admin/AllUsers";
import ErrorPage from "../pages/ErrorPage";
import VolunteerRoute from "./VolunteerRoute";
import VolunteerRequests from "../pages/volunteer/VolunteerRequests";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/profile",
      //   element: <PrivateRoute><Profile /></PrivateRoute>,
      // },
      // {
      //   path: "/edit-profile",
      //   element: <PrivateRoute><EditProfile /></PrivateRoute>
      // },
      // {
      //   path:"/dashboard",
      //   element:<PrivateRoute><DashboardLayout /></PrivateRoute>
      // },
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/volunteer/requests",
        element: (
          <VolunteerRoute>
            <VolunteerRequests />
          </VolunteerRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "create-request",
            element: (
              <DonorRoute>
                <CreateDonationRequest />
              </DonorRoute>
            ),
          },
          {
            path: "my-requests",
            element: (
              <DonorRoute>
                <MyDonationRequests />
              </DonorRoute>
            ),
          },
          {
            path: "edit-request/:id",
            element: (
              <DonorRoute>
                <UpdateDonationRequest />
              </DonorRoute>
            ),
          },
          {
            path: "admin",
            element: (
              <AdminRouter>
                <AdminDashboard />
              </AdminRouter>
            ),
          },
          {
            path: "admin/users",
            element: (
              <AdminRouter>
                <AllUsers />
              </AdminRouter>
            ),
          },
          {
            path: "/donors",
            element: <SearchDonors />,
          },
          {
            path: "/pending-requests",
            element: <PendingRequests />,
          },
          {
            path: "/donation/:id",
            element: <DonationDetails />,
          },
        ],
      },
    ],
  },
]);

// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import DashboardLayout from "../layouts/DashboardLayout";

// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// import PrivateRoute from "./PrivateRoute";
// import DonorRoute from "./DonorRoute";

// import CreateDonationRequest from "../pages/Donor/CreateDonationRequest";
// import MyDonationRequests from "../pages/Donor/MyDonationRequests";
// import UpdateDonationRequest from "../pages/Donor/UpdateDonationRequest";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },

//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "create-request",
//         element: (
//           <DonorRoute>
//             <CreateDonationRequest />
//           </DonorRoute>
//         ),
//       },
//       {
//         path: "my-requests",
//         element: (
//           <DonorRoute>
//             <MyDonationRequests />
//           </DonorRoute>
//         ),
//       },
//       {
//         path: "edit-request/:id",
//         element: (
//           <DonorRoute>
//             <UpdateDonationRequest />
//           </DonorRoute>
//         ),
//       },
//     ],
//   },
// ]);
