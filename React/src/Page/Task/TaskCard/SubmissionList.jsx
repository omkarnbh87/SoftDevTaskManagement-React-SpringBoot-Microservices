/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllSubmissionsByTaskId } from "../../../ReduxToolkit/SubmissionSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#242424",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SubmissionList({ handleClose, open }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const { submission } = useSelector((store) => store);

  useEffect(() => {
    console.log("taskId: ", taskId);
    if (taskId) {
      dispatch(fetchAllSubmissionsByTaskId(taskId));
    }
  }, [taskId]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            {submission.submissions.length > 0 ? (
              <div className="space-y-2">
                {submission.submissions.map((item) => (
                  <SubmissionCard key={item} item={item} />
                ))}
              </div>
            ) : (
              <div className="">
                <div className="text-center">No Submission Found</div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
