import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import About from "./About.jsx";
import "./index.css";
import Navbar from "./Navbar.jsx";
import SportsAnim from "./components/SportsAnim.jsx";
import Teams from "./Teams.jsx";
import JoinUs from "./JoinUs.jsx";
import CreateEvent from "./CreateEvent.jsx";
import AllEvents from "./AllEvents.jsx";
import Tournament from "./Tournament.jsx";
import Profile from "./profile.jsx"
import UpdateProfile from "./updateProfile.jsx"
import ChatApp from "./chatApp.jsx"
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <App />
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <SportsAnim />
      </div>
    ),
  },
  {
    path:"/profile",
    element: (
      <div>
        <Profile/>
        <SportsAnim />
      </div>
    ),
  },
  {
    path:"/chatApp",
    element: (
      <div>
        <ChatApp/>
        <SportsAnim />
      </div>
    ),
  },
  {
    path:"/profileUpdate",
    element: (
      <div>
        <UpdateProfile/>
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/team",
    element: (
      <div>
        <Navbar />
        <Teams />
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/joinus",
    element: (
      <div>
        <JoinUs />
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/CreateEvent",
    element: (
      <div>
        <CreateEvent />
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/allevents",
    element: (
      <div>
        <AllEvents />
        <SportsAnim />
      </div>
    ),
  },
  {
    path: "/tournament",
    element: (
      <div>
        <Navbar />
        <Tournament />
        <SportsAnim />
      </div>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
