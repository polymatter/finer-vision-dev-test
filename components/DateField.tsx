import React, { useState } from "react";
import styled from "styled-components";

interface TextFieldProps {
  label: string
  id: string
  value: string
  onValueChange: (value: string) => void
}

const StyledNumberInput = styled.input`
  border-radius: 0.5rem;
  border: none;
  border-width: 0.1rem;
  height: 1.8rem;
  box-shadow: 0 0 10px #777777;
  width: 7ch;
  margin: 0 0.3rem;
  overflow: hidden;
`;

const StyledLabel = styled.div`
  padding-bottom: 0.5rem;
  font-weight: bold;
`

const DateField = ({ label, id, onValueChange }: TextFieldProps) => {
  const today = new Date();
  const [day, setDay] = useState<number>(today.getDate());
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const getValue = (day: number , month: number, year: number) => {
    return `${day}-${month}-${year}`;
  }

  const onDayChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newDay = parseInt(event.target.value);
    setDay(newDay);
    onValueChange(getValue(newDay, month, year));
  }

  const onMonthChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newMonth = parseInt(event.target.value);
    setMonth(parseInt(event.target.value));
    onValueChange(getValue(day, newMonth, year));
  }

  const onYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newYear = parseInt(event.target.value);
    setYear(parseInt(event.target.value));
    onValueChange(getValue(day, month, newYear));
  }

  return (
    <div>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
      </StyledLabel>
      <div>
        <StyledNumberInput id={`${id}_day`} type="number" value={day} onChange={onDayChange} />
        <StyledNumberInput id={`${id}_month`} type="number" value={month} onChange={onMonthChange} />
        <StyledNumberInput id={`${id}_year`} type="number" value={year} onChange={onYearChange} />
      </div>
    </div>
  )
}

export default DateField;