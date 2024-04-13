import { Button } from "@/components/ui/button";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function CreateFormBtn() {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      className="h-full w-full flex-col items-center justify-center border-dashed border-primary/20"
      onClick = {()=>navigate("/build")}
    >
      <BsFileEarmarkPlus className="group-hover:text-primar mb-2 h-8 w-8 text-muted-foreground" />
      <p className="text-xl font-bold text-muted-foreground group-hover:text-primary">
        Create New Form
      </p>
    </Button>
  );
}

export default CreateFormBtn;
