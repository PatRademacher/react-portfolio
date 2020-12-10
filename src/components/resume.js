import React from 'react';
import samplePDF from './Rademacher_Patrick_Resume.pdf';
import backgroundVid from './backgroundVideo.mp4'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'flex-end', position: 'relative', height: '90%'}}>
    <video className='videoTagResume' autoPlay loop muted>
    <source src={backgroundVid} type='video/mp4' />
    </video>
    <div className='separator' />
    <Document className="resume-center" file={samplePDF}>
      <Page  pageNumber={1} />
    </Document>
    
    </div>
  );
}