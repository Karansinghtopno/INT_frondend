import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageOcr from "../ImageOcr";
import PDFviewer from "../PDFviewer";
import Tesseract from "tesseract.js";
import "./Home.css";

const Home = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("");
  const uploadHandler = () => {
    // console.log(file)
    Tesseract.recognize(file, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(m.progress);
        }
      },
    }).then(({ data: { text } }) => {
      setResult(text);
    });
  };
  return (
    <Box className="home_container">
      <Typography variant="h4" align="center" fontWeight="bold">
        Document Previewer
      </Typography>
      <Grid className="home_input_wrapper">
        <h3 style={{ textAlign: "center", marginTop: "10px" }}>
          Image to text Convert
        </h3>
        <ImageOcr
          setFile={setFile}
          uploadHandler={uploadHandler}
          progress={progress}
        />

        {result !== "" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Result</h4>
            <p>{result}</p>
          </div>
        )}

        <PDFviewer />
      </Grid>
    </Box>
  );
};

export default Home;
