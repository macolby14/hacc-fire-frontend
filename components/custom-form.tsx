import React, { useState } from 'react';
import {
  Typography, Box, IconButton, TextField,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

type DataFieldType = {
    label: string;
    value: string;
    key: number;
}

type DataType = DataFieldType[];

export default function BasicTextFields() {
  const classes = useStyles();
  const [data, setData] = useState<DataType>([
    { label: 'Test', value: 'Testvalue', key: Math.random() },
  ]);

  const handleUpdateField = (newValue: string, type: string, index: number) => {
    const newData = [...data];
    const newField = { ...data[index], [type]: newValue };
    newData[index] = newField;
    setData(newData);
  };

  const handleAddField = () => {
    const newField = [{ label: 'Label', value: 'Value', key: Math.random() }];
    const newData = data.concat(newField);
    setData(newData);
  };

  const fields = data.map((field, ind) => (
    <Box display="flex" flexDirection="row" key={field.key}>
      <TextField
        className={classes.margin}
        id="filled-basic"
        label="Label"
        variant="outlined"
        value={field.label}
        onChange={(e) => {
          const newValue = e.target.value;
          handleUpdateField(newValue, 'label', ind);
        }}
      />
      <TextField
        className={classes.margin}
        id="filled-basic"
        label="Value"
        variant="outlined"
        value={field.value}
        onChange={(e) => {
          const newValue = e.target.value;
          handleUpdateField(newValue, 'value', ind);
        }}
      />
      {ind === data.length - 1
        ? (
          <IconButton onClick={handleAddField}>
            <AddCircleOutlineOutlinedIcon color="primary" />
          </IconButton>
        ) : null}
    </Box>
  ));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h4">Label the Important Fields</Typography>
      {fields}
      <input type="submit" />
    </form>
  );
}
