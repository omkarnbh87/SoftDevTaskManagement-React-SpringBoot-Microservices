import TaskCard from "../Task/TaskCard/TaskCard";

const TaskList = () => {
  return (
    <div className="space-y-5 w-[67vw]">
      <div className="space-y-3">
        {[1, 1, 1, 1].map(() => (
          <TaskCard key={1} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
