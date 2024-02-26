/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Modal from "@mui/material/Modal";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

export default function CreateTask({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  };

  const tags = [
    "Angular",
    "React",
    "Vuejs",
    "Spring Boot",
    "Node js",
    "Python",
  ];

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };
  const formatDate = (input) => {
    let {
      $y: year,
      $M: month,
      $D: day,
      $H: hours,
      $m: minutes,
      $s: seconds,
      $ms: miliseconds,
    } = input;

    const date = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      miliseconds
    );
    const formatedDate = date.toISOString();
    return formatedDate;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { deadline } = formData;
    formData.deadline = formatDate(deadline);
    formData.tags = selectedTags;
    console.log("Formdata: ", formData);
    console.log("deadline: ", formData.deadline);
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
                  label="Title"
                  fullWidth
                  name="title"
                  value={FormData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Image"
                  fullWidth
                  name="image"
                  value={FormData.image}
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
                  value={FormData.description}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(param) => (
                    <TextField label="Tags" fullWidth {...param} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    className="w-full"
                    onChange={handleDeadlineChange}
                    label="Deadline"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <button
                  className="customButton w-full py-2.5 rounded-full"
                  type="submit"
                >
                  Create
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
