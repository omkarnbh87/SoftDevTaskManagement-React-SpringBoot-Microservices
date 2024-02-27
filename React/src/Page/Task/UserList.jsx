/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "../../ReduxToolkit/AuthSlice";
import { assignTaskToUser } from "../../ReduxToolkit/TaskSlice";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

export default function UserList({ handleClose, open }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList(localStorage.getItem("jwt")));
  }, []);
  const handleAssignTask = (user) => {
    dispatch(assignTaskToUser({ userId: user.id, taskId: taskId }));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {auth.users.map((item, index) => (
            <>
              <div
                key={item}
                className="flex items-center justify-between w-full"
              >
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://cdn.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.webp"></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      secondary={`@${item.fullName
                        .split(" ")
                        .join("_")
                        .toLowerCase()}`}
                      primary={item.fullName}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button
                    onClick={() => handleAssignTask(item)}
                    className="customButton"
                  >
                    select
                  </Button>
                </div>
              </div>
              {index !== auth.users.length && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
