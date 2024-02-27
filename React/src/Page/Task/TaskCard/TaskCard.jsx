/* eslint-disable react/prop-types */
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskCard from "./EditTaskCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../../ReduxToolkit/TaskSlice";
import { useLocation, useNavigate } from "react-router-dom";
import SubmitTaskFormModel from "./SubmitTaskFormModel";

const TaskCard = ({ item }) => {
  const { auth } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    // navigate("");
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);

  const handleCloseUserList = () => {
    setOpenUserList(false);
  };

  const handleOpenUserList = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmitFormMoel, setOpenSubmitFormModel] = useState(false);

  const handleCloseSubmitFormModel = () => {
    setOpenSubmitFormModel(false);
  };

  const handleOpenSubmitFormModel = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenSubmitFormModel(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);

  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleOpenSubmissionList = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [openUpdateTask, setOpenUpdateTask] = useState(false);

  const handleCloseUpdateTask = () => {
    setOpenUpdateTask(false);
  };

  const handleRemoveParam = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.delete("filter");
    const queryString = updatedParams.toString();
    const updatedPath = queryString
      ? `${location.pathname}?${queryString}`
      : location.pathname;

    navigate(updatedPath);
  };

  const handleOpenUpdateTaskModel = () => {
    setOpenUpdateTask(true);
    const updatedParams = new URLSearchParams(location.search);

    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    dispath(deleteTask(item.id));
    handleMenuClose();
  };

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 space-y-2 items-center w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src={item.image}
            />
          </div>
          <div className="space-y-5 ">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {item.tags.map((item) => (
                <span key={item} className="py-1 px-5 rounded-full techStack">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon className="text-white"></MoreVertIcon>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {auth.user?.role === "ADMIN" ? (
              <div>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submission
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem onClick={handleOpenSubmitFormModel}>Submit</MenuItem>
              </div>
            )}
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      ></SubmissionList>
      <EditTaskCard open={openUpdateTask} handleClose={handleCloseUpdateTask} />
      <SubmitTaskFormModel
        open={openSubmitFormMoel}
        handleClose={handleCloseSubmitFormModel}
      />
    </div>
  );
};

export default TaskCard;
