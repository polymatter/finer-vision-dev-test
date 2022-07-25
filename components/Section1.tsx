import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import TextField from "./TextField";
import axios from "axios";

const StyledSection1 = styled.section`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.sectionBackground};
  border-radius: 0.5rem;
  margin: 0.3rem;
`;

const StyledButton = styled.button`
  width: 6rem;
  color: white;
  border-radius: 0.5rem;
  background: ${props => props.theme.button};
  margin: 0.3rem;
  margin-right: 0.8rem;
  padding: 0.3rem 1rem;
  border-width: 0;
`;

const FieldContainer = styled.div`
  display: flex;
  width: 25vw;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 0.3rem;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

const StyledHeading = styled.h2`
  font-size: 100%;
  font-weight: normal;
  padding: 1rem;
  padding-left: 1rem;
  width: 25vw;
  margin: 0;
  border-radius: 0.5rem;
  color: white;
  text-shadow: 1px 1px black;
  background: ${props => props.theme.headingBackground}
`;

const ErrorMsgs = styled.div`
  color: red;
`;

interface Section1Props {
  isOpen: boolean
  onClick: MouseEventHandler
  nextSection: () => void
}

const Section1 = ({ isOpen, onClick, nextSection }: Section1Props) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<Array<string>>([]);

  const isEmpty = (s: string) => s == undefined || s.length === 0;

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {


    axios.post('/api/saveSectionOne', { firstname, surname, email }).then(nextSection).catch(console.error);
  }

  return (
      <StyledSection1>
        <StyledHeading onClick={onClick}>Step 1: Your details</StyledHeading>
        {isOpen &&
          <>
            <FieldContainer>
              <TextField label="First Name" id="first_name" value={firstname} onValueChange={setFirstname} />
              <TextField label="Surname" id="surname" value={surname} onValueChange={setSurname} />
              <TextField label="Email Address" id="email" value={email} onValueChange={setEmail} />
            </FieldContainer>
            <ButtonContainer>
              <StyledButton type="button" onClick={onSubmit}>Next &gt;</StyledButton>
            </ButtonContainer>
          </>
        }
      </StyledSection1>
  )
}



export default Section1;