import React from "react";
import styled from "styled-components";

interface TextFieldProps {
  label: string
  id: string
  value: string
  onValueChange: (value: string) => void
}

const StyledTextInput = styled.input`
  border-radius: 0.5rem;
  border: none;
  border-width: 0.1rem;
  height: 1.8rem;
  box-shadow: 0 0 10px #777777;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const StyledLabel = styled.div`
  padding-bottom: 0.5rem;
  font-weight: bold;
`;

const TextField = ({ label, id, value, onValueChange }: TextFieldProps) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onValueChange(event.target.value)
  }

  return (
    <div>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
      </StyledLabel>
      <div>
        <StyledTextInput id={id} type="text" value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default TextField;