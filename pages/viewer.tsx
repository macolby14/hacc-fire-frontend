import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomForm from '../components/custom-form';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  splitScreen: {
    width: '50%',
  },
}));

export default function Viewer() {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box display="flex">
      <Document
        className={classes.splitScreen}
        file="/pdf/ChineseArrivals_1847-1870_00001.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className={classes.splitScreen}>
        <CustomForm />
      </div>
    </Box>
  );
}
