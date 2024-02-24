import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

const TaskCard = () => {
  return (
    <div>
      <div className="card lg: flex justify-center">
        <div className="lg:flex gap-5 space-y-2 items-center w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src="https://th.bing.com/th/id/R.7ed5eef1cb1c0faf0e06bd29f900e2ff?rik=5SPdYr3n5Lfuvw&riu=http%3a%2f%2fstatic4.businessinsider.com%2fimage%2f58fe49fb0ba0b8ea048b59e9-2400&ehk=eEn110aUTrq0hz%2bJ%2fBb1VuOewIbx42WnS1noEQ4JBIM%3d&risl=&pid=ImgRaw&r=0"
            />
          </div>
          <div className="space-y-5 ">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Use latest frameworks and technology to make this website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 1, 1, 1].map(() => (
                <span key={1} className="py-1 px-5 rounded-full techStack">
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
