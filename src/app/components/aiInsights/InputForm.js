import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const InputForm = ({ dataSymbol, setDataSymbol }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <TextField
        label="Ticker Symbol"
        value={dataSymbol}
        onChange={(e) => setDataSymbol(e.target.value)}
        fullWidth
        placeholder="Enter stock ticker (e.g., AAPL)"
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: '10px',
            fontSize: '1.1rem',
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.1rem',
          },
        }}
      />
    </div>
  );
};

InputForm.propTypes = {
  dataSymbol: PropTypes.string.isRequired,
  setDataSymbol: PropTypes.func.isRequired,
};

export default InputForm;
