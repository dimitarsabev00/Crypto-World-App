import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppContext } from "../../context/AppContext";
import { auth } from "../../configs/firebase";
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Tab,
  Tabs,
} from "@mui/material";
const AuthModal = () => {
  const [open, setOpen] = useState(false);

  const { setAlert } = useAppContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign Up Successful. Welcome ${res.user.email}`,
          type: "success",
        });

        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
        return;
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor: "#EEBC1D",
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            style={{
              width: 400,
              color: "white",
              backgroundColor: "#424242",
              borderRadius: 10,
            }}
          >
            <AppBar
              position="static"
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && <Signup handleClose={handleClose} />}
            <Box
              style={{
                padding: 24,
                paddingTop: 0,
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: 20,
                fontSize: 20,
                backgroundColor: "#424242",
              }}
            >
              <span>OR</span>
              <Button
                style={{ width: "100%", outline: "none" }}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
