import { Button } from "@mui/material";
import React from "react";

const ImageOcr = ({ setFile, uploadHandler,progress }) => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
        <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        placeholder="choose file"
      />
      <Button onClick={uploadHandler}>upload</Button>
      <div>
        <progress value={progress} max={1} style={{width:"320px"}}/>
      </div>
      </div>
    </div>
  );
};

export default ImageOcr;
