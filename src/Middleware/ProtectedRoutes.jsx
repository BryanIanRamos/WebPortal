import { Navigate, Outlet } from "react-router-dom";

// Define a component called ProtectedRoutes that returns either the child components or redirect to the homepage
export default function ProtectedRoutes() {
  // Retrieve the 'isLogged' value from local storage
  let isAuthenticated = localStorage.getItem("isLogged");

  // If the user is authenticated, return the child components
  // Otherwise, navigate the user to the homepage
  return isAuthenticated === "true" ? <Outlet /> : <Navigate to="" />;
}
