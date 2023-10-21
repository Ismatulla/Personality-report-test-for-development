import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalWindow } from "../../reducers/reportsSlice";
import { useSelector, useDispatch } from "react-redux";
import closecross from "../../assets/close-cross-icon.svg";
export default function ModalWindow({ logo, text, width, text2 }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleClose = () => {
    dispatch(modalWindow(false));
    console.log(data.report.isOpen);
  };
  return (
    <div style={{ width: width }}>
      <Modal
        open={data.report.isOpen}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #fff",
            borderRadius: "8px",
            boxShadow: 2,
            p: "2.8rem",
            width: { width },
          }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={logo} alt="waiting logo" />
          </Typography>
          <Typography
            onClick={handleClose}
            component="div"
            sx={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "#F2F2F2",
              borderRadius: "4px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}>
            <img src={closecross} alt="" width="100%" />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 2 }}
            className="fontPrompt font_weight_400 font_size_16">
            {text}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="fontPrompt font_weight_400 font_size_16">
            {text2 && text2}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
