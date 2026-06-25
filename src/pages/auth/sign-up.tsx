import { useState } from "react";
import useSignUpMutation from "../../services/auth/use-signup-mutation";
import type { SubmitHandler } from "react-hook-form";
import AuthSignUpLayout from "../../components/auth/auth-signup-layout";
import SignUpForm from "../../components/auth/signup-form";

export interface IHandleSignUp {
  fullName: string;
  email: string;
  password: string;
  profilePicture?: string;
  phone: string;
  address: string;
  roles?: string[];
}

const SignUp = () => {
  const [isSignUpAsCompany, setIsSignUpAsCompany] = useState(false);
  const { mutate: signUp, isPending } = useSignUpMutation();
  const handleSignUp: SubmitHandler<IHandleSignUp> = (data) => {
    const { fullName, email, password, phone, address } = data;
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("address", address);

    const roles: string[] = [];
    if (isSignUpAsCompany) {
      roles.push("company");
    }
    roles.forEach((role) => formData.append("roles", role));

    signUp(formData);
  };

  const handleSignUpAsCompany = () => {
    setIsSignUpAsCompany(!isSignUpAsCompany);
  };
  return (
    <AuthSignUpLayout isSignUpAsCompany={isSignUpAsCompany}>
      <SignUpForm
        handleSignUp={handleSignUp}
        isPending={isPending}
        isSignUpAsCompany={isSignUpAsCompany}
        setIsSignUpAsCompany={handleSignUpAsCompany}
      />
    </AuthSignUpLayout>
  );
};

export default SignUp;
