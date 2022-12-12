import Box from "@mui/material/Box";

const FormCard = (props) => (
  <Box
    p={2}
    border={1}
    display="inline-block"
    backgroundColor="#2A2B2C"
    style={{ aspectRatio: 4 / 3 }}
    minWidth="200px"
    flexGrow={1}
    className="form-card"
    {...props}
  />
);

const iconStyles = {
  fontSize: "large",
  style: { color: "#E8FC0F", padding: 20, cursor: "pointer" },
};

export { FormCard, iconStyles };
