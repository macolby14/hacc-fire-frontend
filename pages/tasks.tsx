import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CustomForm from '../components/custom-form';
import Viewer from '../components/viewer';
// eslint-disable-next-line import/extensions
import { TaskType, DataFieldType } from '../shared/shared-types';

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1,
  },
}));

export default function Tasks() {
  const classes = useStyles();
  const [task, setTask] = useState<TaskType | null>(null);
  const [isLoadingTask, setIsLoadingTask] = useState(false);
  const [isSubmittingTask, setIsSubmittingTask] = useState(false);

  const getTask = async () => {
    axios.get('http://localhost:8000/getTask')
      .then((resp) => {
        const taskFromServer: TaskType = resp.data;
        setTask(taskFromServer);
        setIsLoadingTask(false);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.log(err);
        setIsLoadingTask(false);
      });
  };

  useEffect(() => {
    setIsLoadingTask(true);
    getTask();
  }, []);

  const handleTaskCompletion = (formData: DataFieldType[]) => {
    if (task === null) { throw new Error('No Task Selected'); }

    setIsSubmittingTask(true);

    const payload = { tableName: task.tableName, url: task.pdfUrl, formData };
    const jsonOptions = { headers: { 'Content-Type': 'application/json' } };
    axios.post('http://localhost:8000/completeTask', payload, jsonOptions).then(() => {
      setIsSubmittingTask(false);
      getTask();
    }).catch(() => {
      setIsSubmittingTask(false);
    });
  };

  let displayedTasks = <div>Loading...</div>;

  if (task !== null) {
    displayedTasks = (
      <Box display="flex" flexDirection="row">
        <Viewer pdfUrl={task.pdfUrl} isLoading={isLoadingTask} />
        <div className={classes.flexGrow}>
          <CustomForm
            fieldInfo={task.fieldInfo}
            hasDynamicLabels={false}
            handleTaskCompletion={handleTaskCompletion}
            isLoading={isSubmittingTask}
          />
        </div>
      </Box>
    );
  }

  return <>{displayedTasks}</>;
}
