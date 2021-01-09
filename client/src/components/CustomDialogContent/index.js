import { CustomDialog, useDialog } from 'react-st-modal';
import React, {useState} from "react";



export  const CustomDialogContent = () =>{
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div>
      {/* <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value);
        }}
      >
        Custom button
      </button> */}
    </div>
  );
}

export default CustomDialogContent;