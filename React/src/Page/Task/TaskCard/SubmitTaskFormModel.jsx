/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";

import { useLocation } from "react-router-dom";
import { submitTask } from "../../../ReduxToolkit/SubmissionSlice";
import { Grid, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SubmitTaskFormModel({ item, handleClose, open }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    githubLink: "",

    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitTask({ taskId, githubLink: formData.githubLink }));
    handleClose();
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Github Link"
                  fullWidth
                  rows={1}
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <button
                  className="customButton w-full py-2.5 rounded-full"
                  type="submit"
                >
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
