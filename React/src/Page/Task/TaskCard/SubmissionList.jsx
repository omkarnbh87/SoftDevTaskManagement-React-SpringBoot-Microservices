/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";

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

const submission = [1, 1, 1, 1];

export default function SubmissionList({ handleClose, open }) {
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
            {submission.length > 0 ? (
              <div className="space-y-2">
                {submission.map((item) => (
                  <SubmissionCard key={item} />
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
