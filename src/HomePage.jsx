import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Ticket Booking</h1>

      <div className="userButtons">
        <Button
          variant="contained"
          onClick={()=> navigate("/admin")}>
            Admin
        </Button>
        <Button 
          variant="contained"
          onClick={()=> navigate("/user/signup")}>
            User
        </Button>
      </div>
    </div>
  );
}
