import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomForm from '../components/custom-form';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(() => ({
  scrollable: {
    overflow: 'auto',
    width: '100%',
    height: '100%',
  },
  viewer: {
    width: '60%',
    height: '70vh',
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

export default function Viewer() {
  const classes = useStyles();
  const [, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Box display="flex" flexDirection="row">
      <Document
        file="/pdf/ChineseArrivals_1847-1870_00001.pdf"
        // file="/pdf/example_full.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={classes.viewer}
      >
        <div className={classes.scrollable}>
          <Page pageNumber={pageNumber} />
        </div>
      </Document>
      <div className={classes.flexGrow}>
        <CustomForm />
      </div>
    </Box>
  );
}
