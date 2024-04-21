import { SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
  const email = '';
  const password = ''; 
  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, {
      email,
      password,
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <TextField
        value={email}
        id="outlined-basic"
        label="Email"
        placeholder="Enter your email"
        variant="outlined"
      />
      <TextField
        value={password}
        type="password"
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};
