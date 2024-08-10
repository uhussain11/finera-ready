import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const InputForm = ({ dataSymbol, setDataSymbol, startDate, setStartDate, endDate, setEndDate, analysisType, setAnalysisType }) => {
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <TextField
          label="Stock Symbol"
          value={dataSymbol}
          onChange={(e) => setDataSymbol(e.target.value)}
          fullWidth
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <FormControl fullWidth>
          <InputLabel>Analysis Type</InputLabel>
          <Select
            value={analysisType}
            onChange={(e) => setAnalysisType(e.target.value)}
          >
            <MenuItem value="fundamental">Fundamental Analysis</MenuItem>
            <MenuItem value="sentiment">Sentiment Analysis</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default InputForm;
