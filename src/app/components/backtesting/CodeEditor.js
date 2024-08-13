import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import PropTypes from 'prop-types';

const CodeEditor = ({ value, onChange }) => {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <CodeMirror
        value={value}
        height="100%"
        width="100%"
        theme="dark"
        extensions={[python()]}
        onChange={(value) => {
          onChange(value);
        }}
        options={{
          lineWrapping: true,
          scrollbarStyle: 'overlay'
        }}
      />
    </div>
  );
};

CodeEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditor;
