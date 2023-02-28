import React from "react";
import { useState } from "react";
import "./PDFviewer.css"

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFviewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");
  const allowedFiles = ["application/pdf"];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("please select a PDF");
    }
  };
  return (
    <div className="container">
      <h3 style={{textAlign:"center",marginTop:"10px"}}>Upload PDF</h3>
      <form>
        <input
          type="file"
          className="input"
          onChange={handleFile}
        ></input>
        {pdfError && <span style={{ color: "red" }}>{pdfError}</span>}
      </form>
      <h4>View PDF</h4>
      <div className="viewer" style={{ height: '600px' }}>
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
              pageMode={'single'}
              defaultScale={1}
            ></Viewer>
          </Worker>
        )}
        {!pdfFile && <p className="error-message">No file is selected yet</p>}
      </div>
    </div>
  );
};

export default PDFviewer;
