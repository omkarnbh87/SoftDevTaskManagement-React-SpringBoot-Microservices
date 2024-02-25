import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useState } from "react";
import CreateTask from "../Task/CreateTask";
import "./Sidebar.css";

const menu = [
  { name: "Home", value: "Home", role: ["ADMIN", "CUSTOMER"] },
  { name: "Done", value: "Done", role: ["ADMIN", "CUSTOMER"] },
  { name: "Assigned", value: "Assigned", role: ["ADMIN"] },
  { name: "Not Assigned", value: "Not Assigned", role: ["ADMIN"] },
  { name: "Create New Task", value: "Create New Task", role: ["ADMIN"] },
  { name: "Notification", value: "Notification", role: ["CUSTOMER"] },
];
const role = "ADMIN";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleMenuChange = (item) => {
    if (item.name == "Create New Task") {
      handleOpenCreateTaskModel();
    }
    setActiveMenu(item.name);
  };

  const handleLogout = () => {
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
            .filter((item) => item.role.includes(role))
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
