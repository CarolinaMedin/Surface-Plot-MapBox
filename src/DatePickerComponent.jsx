import React, { useEffect, useState } from 'react';
import { Label } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
registerLocale("es", es);


function DatePickerComponent() {

    useEffect(() => {
        document.title = 'Pilas'
    });
    
    const [date, setDate] = useState(new Date());

    const handleCalendarClose = () => console.log("Calendario abrieto");
    const handleCalendarOpen = () => console.log("Calendario cerrado");


    return (
        <div>
            <Label style={{ marginTop: '12px', color: '#ffff' }}>FECHA</Label>
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleccione el día"
                minDate={new Date(2020)}
                maxDate={new Date()}
                /* scrollableMonthYearDropdown */
                /* showMonthDropdown */
                showYearDropdown
                locale="es"
            />


        </div>
    );
};

export default DatePickerComponent;


