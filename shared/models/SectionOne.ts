const SectionOneModel : Record<string, string> = Object.freeze({
  firstname: "string",
  surname: "string",
  email: "string"
});

const isValidString = (s: string) => s != undefined && s.length > 0;

const isValidFirstname = (firstname: string) => {
  if (!isValidString(firstname))
    return "Firstname is empty";
}

const isValidSurname = (firstname: string) => {
  if (!isValidString(firstname))
    return "Firstname is empty";
}

const isValidEmail = (firstname: string) => {
  if (!isValidString(firstname))
    return "Firstname is empty";
}



export default SectionOneModel;