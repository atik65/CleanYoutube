import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";

const DescriptionArea = ({ description }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ pt: "0.5rem" }}>
      <Typography sx={{ my: "0.5rem" }} variant="h6">
        Description
      </Typography>
      <Box
        sx={{
          wordBreak: "break-all",
          // width: "100%",
          // overflow: "hidden",
        }}
      >
        {description?.length > 300 && !open
          ? description?.slice(0, 300) + "..."
          : description}

        {description?.length > 300 && !open ? (
          <Button onClick={handleToggle} component={"p"}>
            see more
          </Button>
        ) : (
          ""
        )}

        <Collapse in={open}>
          <Typography variant="p">{description}</Typography>
          <Button sx={{ p: 0 }} onClick={handleToggle} component={"p"}>
            ...see less
          </Button>
        </Collapse>
      </Box>
    </Box>
  );
};

export default DescriptionArea;
