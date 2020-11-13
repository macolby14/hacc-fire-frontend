import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CustomForm from '../components/custom-form';
import Viewer from '../components/viewer';
// eslint-disable-next-line import/extensions
import { TaskType } from '../shared/shared-types';

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1,
  },
}));

export default function Tasks() {
  const classes = useStyles();
  const [task, setTask] = useState<TaskType | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/getTask')
      .then((resp) => {
        const taskFromServer: TaskType = resp.data;
        setTask(taskFromServer);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="row">
      {task != null
        ? <Viewer pdfUrl={task.pdfUrl} fieldInfo={task.fieldInfo} />
        : <div>Loading</div>}
      <div className={classes.flexGrow}>
        <CustomForm />
      </div>
    </Box>
  );
}
