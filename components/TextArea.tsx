import React from "react";
import styled from "styled-components";

interface TextFieldProps {
  label: string
  id: string
  value: string
  onValueChange: (value: string) => void
}

const StyledTextArea = styled.textarea`
  border-radius: 0.5rem;
  border: none;
  border-width: 0.1rem;
  height: 5rem;
  box-shadow: 0 0 10px #777777;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const StyledLabel = styled.div`
  padding-bottom: 0.5rem;
  font-weight: bold;
`;

const TextField = ({ label, id, value, onValueChange }: TextFieldProps) => {
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onValueChange(event.target.value)
  }

  return (
    <div>
      <StyledLabel>
        <label htmlFor={id}>{label}</label>
      </StyledLabel>
      <div>
        <StyledTextArea id={id} rows={10} cols={40} value={value} onChange={onChange}/>
      </div>
    </div>
  )
}

export default TextField;