import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';

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
}));

type ViewerProps = {
  pdfUrl: string;
  isLoading: boolean;
}

const Viewer = ({
  pdfUrl, isLoading,
}: ViewerProps) => {
  const classes = useStyles();
  const [, setNumPages] = useState<number | null>(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  let rendered = <div>Loading...</div>;

  if (!isLoading) {
    rendered = (
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className={classes.viewer}>
        <div className={classes.scrollable}>
          <Page pageNumber={pageNumber} />
        </div>
      </Document>
    );
  }

  return (
    <>
      {rendered}
    </>
  );
};

export default Viewer;
