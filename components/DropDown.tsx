import React from "react";
import { mapFinderOptions } from "sequelize/types/utils";
import styled from "styled-components";

interface DownDownProps {
  label: string
  prompt?: string
  id: string
  value: string
  onValueChange: (value: string) => void
  options: Array<string>
}

const StyledSelect = styled.select`
  border-radius: 0.5rem;
  border: none;
  border-width: 0.1rem;
  height: 1.8rem;
  width: 10rem;
  box-shadow: 0 0 10px #777777;
`;

const StyledLabel = styled.div`
  padding-bottom: 0.5rem;
  font-weight: bold;
`

const DropDown = ({ label, prompt, id, value, onValueChange, options } : DownDownProps) => {
  const onChange : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    onValueChange(event.target.value)
  }

  return (
    <div>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
      </StyledLabel>
      <div>
        <StyledSelect id={id} value={value} onChange={onChange}>
            { prompt && <option value="" disabled selected>{prompt}</option> }
            { options.map((option, index) => <option value={option} key={`${id}_${index}`}>{option}</option>) }        
        </StyledSelect>
      </div>
    </div>
  )
}

export default DropDown;