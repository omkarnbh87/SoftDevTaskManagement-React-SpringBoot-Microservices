import { useEffect } from "react";
import TaskCard from "../Task/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { fetchTasks, fetchUsersTasks } from "../../ReduxToolkit/TaskSlice";
=======
import { fetchTasks } from "../../ReduxToolkit/TaskSlice";
>>>>>>> 31a43ff7d9ac006544a242c8119f3fdd3be69944
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const { task, auth } = useSelector((store) => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");
  useEffect(() => {
    if (auth.user?.role === "ADMIN") {
      dispatch(fetchTasks({ status: filterValue }));
    } else {
<<<<<<< HEAD
      dispatch(fetchUsersTasks({ status: filterValue }));
    }
  }, [filterValue]);

  return (
    <div className="space-y-5 w-[67vw]">
      <div className="space-y-3">
        {auth.user?.role === "ADMIN"
          ? task.tasks.map((item) => <TaskCard key={item} item={item} />)
          : task.usersTask.map((item) => <TaskCard key={item} item={item} />)}
=======
      dispatch(fetchTasks({ status: filterValue }));
    }
  }, [filterValue]);
  console.log("task : ", task);
  return (
    <div className="space-y-5 w-[67vw]">
      <div className="space-y-3">
        {task.tasks.map((item) => (
          <TaskCard key={item} item={item} />
        ))}
>>>>>>> 31a43ff7d9ac006544a242c8119f3fdd3be69944
      </div>
    </div>
  );
};

export default TaskList;
