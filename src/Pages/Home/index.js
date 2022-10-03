import PsychologyIcon from "@mui/icons-material/Psychology";
import Button from "@mui/material/Button";
import MainHeader from "Headers/MainHeader.js";
import "./styles.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <PsychologyIcon sx={{ fontSize: "5em", color: "#D3D3D3" }} />
        <MainHeader>Migraine Monitor</MainHeader>
        <p className="MainIntro">
          Track your migraines in a quick and easy way to discover early warning
          signs, triggers, and remedies that work best for you.
        </p>
        <div className="main-buttons">
          <Button
            variant="contained"
            sx={{
              background: "#D3D3D3",
              color: "#282c34",
              marginRight: "15px",
              fontWeight: "800",
              fontSize: "0.85em",
              fontFamily: "Courier New",
              width: "125px",
              "&:hover": { backgroundColor: "#778899" },
            }}
          >
            Logs
          </Button>
          <a href="/survey">
            <Button
              variant="contained"
              sx={{
                background: "#D3D3D3",
                color: "#282c34",
                marginLeft: "15px",
                fontWeight: "bold",
                fontSize: "0.85em",
                fontFamily: "Courier New",
                width: "125px",
                "&:hover": { backgroundColor: "#778899" },
              }}
            >
              + Track
            </Button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;
