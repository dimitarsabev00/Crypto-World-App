import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { AppState } from "../context/AppContext";

const AlertBox = () => {
  const { alert, setAlert } = AppState();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Alert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBox;
