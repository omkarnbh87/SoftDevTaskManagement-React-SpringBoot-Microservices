import { useEffect } from "react";
import TaskCard from "../Task/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, fetchUsersTasks } from "../../ReduxToolkit/TaskSlice";
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
      dispatch(fetchUsersTasks({ status: filterValue }));
    }
  }, [filterValue]);

  return (
    <div className="space-y-5 w-[67vw]">
      <div className="space-y-3">
        {auth.user?.role === "ADMIN"
          ? task.tasks.map((item) => <TaskCard key={item} item={item} />)
          : task.usersTask.map((item) => <TaskCard key={item} item={item} />)}
      </div>
    </div>
  );
};

export default TaskList;
