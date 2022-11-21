import React, { useEffect, useState } from 'react';
import { Label } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
import addDays from "date-fns/addDays";
registerLocale("es", es);


function DatePickerHighlights() {

    useEffect(() => {
        document.title = 'Pilas'
    });

     const [date, setDate] = useState(new Date());

    return (
        <div>
            <style>{`
          .DatePicker {
            background-color: #42B373 !important;
            color: white;
          }`}</style>
            <Label style={{ marginTop: '12px', color: '#42B373', backgroundColor: '#42B373 !important' }}>FECHA</Label>
            <DatePicker
            style={{ marginTop: '12px', color: '#42B373', backgroundColor: '#42B373 !important' }}
                selected={date}
                onChange={(date) => setDate(date)}
                maxDate={new Date()}
                /* dateFormat="dd/MM/yyyy" */
                showYearDropdown
                locale="es"
                highlightDates={[
                    addDays(new Date("2022/09/10"), 0), 
                    addDays(new Date("2022/10/17"), 0),
                    addDays(new Date("2022/10/20"), 0),
                    addDays(new Date("2022/10/25"), 0),
                    addDays(new Date("2022/10/28"), 0),   
                    addDays(new Date("2022/11/03"), 0),
                    addDays(new Date("2022/11/04"), 0),
                ]}
                excludeDates={[addDays(new Date("2022/08/08"), 0), addDays(new Date("2022/11/01"), 0)]}
            />


        </div>
    );
};

export default DatePickerHighlights;


