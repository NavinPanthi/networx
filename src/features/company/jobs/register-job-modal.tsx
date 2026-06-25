import Drawer from "../../../components/ui/drawer";
import AddJobForm from "./add-job-form";

const RegisterJobDrawer = ({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
      className="!max-w-[800px] gap-10"
    >
      <AddJobForm toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default RegisterJobDrawer;
