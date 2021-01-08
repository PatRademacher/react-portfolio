import React from 'react';
import samplePDF from './reactResume.pdf';
import backgroundVid from './backgroundVideo.mp4'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div style={{justifyContent: 'center', width: '100%'}}>
    <video className='videoTagResume' autoPlay loop muted>
    <source src={backgroundVid} type='video/mp4' />
    </video>
    <div className = 'separatorTwo' />
    <div style={{justifyContent: 'center', display: 'flex'}}>
    

        <button
         style={{color: 'rgb(0, 157, 234)', backgroundColor: '#0cf2ad', border: 'solid white 2px', fontFamily: "'Fredoka One'", padding: '3px 3px', fontSize: '1.4em'}}>
           <a style={{color: 'rgb(0, 57, 134)', backgroundColor: '#0cf2ad'}} href={samplePDF} target="_blank">CLICK HERE TO DOWNLOAD PDF</a></button>
    </div>
    <div className = 'separatorTwo' />

    <div style={{justifyContent: 'center', display: 'flex'}}>

    <Document className="resume-center" file={samplePDF}>
      <Page  pageNumber={1} />
    </Document>
    
    </div>
    </div>
    
  );
}