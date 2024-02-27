import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateTask from "../Task/CreateTask";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "../../ReduxToolkit/AuthSlice";

const menu = [
  { name: "Home", value: "Home", role: ["ADMIN", "CUSTOMER"] },
  { name: "Done", value: "DONE", role: ["ADMIN", "CUSTOMER"] },
  { name: "Assigned", value: "ASSIGNED", role: ["ADMIN"] },
  { name: "Not Assigned", value: "PENDING", role: ["ADMIN"] },
  { name: "Create New Task", value: "Create New Task", role: ["ADMIN"] },
  { name: "Notification", value: "Notification", role: ["CUSTOMER"] },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUserProfile(localStorage.getItem("jwt")));
  }, []);
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleMenuChange = (item) => {
    const updatedParams = new URLSearchParams(location.search);
    if (item.name == "Create New Task") {
      handleOpenCreateTaskModel();
    } else if (item.name == "Home") {
      updatedParams.delete("filter");
      const queryString = updatedParams.toString();
      const updatedPath = queryString
        ? `${location.pathname}?${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
    setActiveMenu(item.name);
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log("Logout clicked");
  };

  const [openCreateTask, setOpenCreateTask] = useState(false);

  const handleCloseCreateTask = () => {
    setOpenCreateTask(false);
  };

  const handleOpenCreateTaskModel = () => {
    setOpenCreateTask(true);
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              className="border-2 border-[#c24dd0]"
              src="https://static.vecteezy.com/system/resources/previews/009/025/703/original/nbh-logo-nbh-letter-nbh-letter-logo-design-initials-nbh-logo-linked-with-circle-and-uppercase-monogram-logo-nbh-typography-for-technology-business-and-real-estate-brand-vector.jpg"
            />
          </div>
          {menu
            .filter((item) => item.role.includes(auth.user.role))
            .map((item) => (
              <p
                onClick={() => handleMenuChange(item)}
                key={item.name}
                className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                  activeMenu === item.name ? "activeMenuItem" : "menuItem"
                }`}
              >
                {item.name}
              </p>
            ))}
          <button
            className="logoutButton w-full py-2.5 rounded-full"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
      <CreateTask open={openCreateTask} handleClose={handleCloseCreateTask} />
    </>
  );
};

export default Sidebar;
