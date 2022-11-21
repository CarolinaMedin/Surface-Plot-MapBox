import React, { useState } from 'react';
import { Label } from 'reactstrap';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DatePickerHighlights() {

  const modifiers = {
    birthday: new Date(2022, 10, 7),
    birth: new Date(2022, 10, 10),
    birth1: new Date(2022, 10, 27)
  };

  const [selected, setSelected] = useState();

  return (
    <div style={{ color: '#000', backgroundColor: '#000 !important' }}>
      <style>{`
          .DayPicker-Day--birthday {
            background-color: #42B373 !important;
            color: white;
          }
          .DayPicker-Day--birth {
            background-color: #42B373 !important;
            color: white;
          }
          .DayPicker-Day--birth1 {
            background-color: #42B373 !important;
            color: white;
          }
          `}</style>
      <Label style={{ marginTop: '12px', color: '#ffff' }}>FECHA</Label>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        style={{ color: '#000', backgroundColor: '#42B373 !important' }}
        /* month={new Date(2022, 10)} */
        day={new Date(2022, 10, 19)}
        modifiers={modifiers}
        maxDate={new Date()}

        defaultMonth={new Date()}
        
      />
    </div>
  );
};

export default DatePickerHighlights;


