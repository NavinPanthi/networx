import { yupResolver } from "@hookform/resolvers/yup";
import { type SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "../ui/button";
import Label from "../ui/label";
import TextInput from "../ui/text-input";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email must be valid.")
      .required("Email is required."),
    password: yup.string().required("Password is required."),
    fullName: yup.string().required("Full name is required."),
    phone: yup.string().required("Phone is required."),
    address: yup.string().required("Address is required."),
  })
  .required();

type SignUpSchemaType = yup.InferType<typeof schema>;

const SignUpForm = ({
  handleSignUp,
  isPending,
  isSignUpAsCompany,
  setIsSignUpAsCompany,
}: {
  handleSignUp: SubmitHandler<SignUpSchemaType>;
  isPending?: boolean;
  isSignUpAsCompany: boolean;
  setIsSignUpAsCompany: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: yupResolver(schema),
  });

  return (
    <form className="mt-6" onSubmit={handleSubmit(handleSignUp)}>
      <fieldset>
        <Label htmlFor="fullName">
          {isSignUpAsCompany ? "Company name" : "Full name"}
        </Label>

        <TextInput
          {...register("fullName")}
          id="fullName"
          placeholder="Enter your full name"
          errorMsg={errors.fullName?.message}
        />
      </fieldset>

      <fieldset className="mt-4">
        <Label htmlFor="email">
          {" "}
          {isSignUpAsCompany ? "Company email" : " Email"}
        </Label>

        <TextInput
          {...register("email")}
          id="email"
          placeholder="Enter your email"
          errorMsg={errors.email?.message}
        />
      </fieldset>

      <fieldset className="mt-4">
        <Label htmlFor="password">Password</Label>
        <TextInput
          {...register("password")}
          id="password"
          isPasswordInput
          placeholder="Enter your password"
          errorMsg={errors.password?.message}
        />
      </fieldset>

      <fieldset className="mt-4">
        <Label htmlFor="address">Address</Label>
        <TextInput
          {...register("address")}
          id="address"
          placeholder="Enter your address"
          errorMsg={errors.address?.message}
        />
      </fieldset>

      <fieldset className="mt-4">
        <Label htmlFor="phone">Phone</Label>
        <TextInput
          {...register("phone")}
          id="phone"
          placeholder="Enter your phone"
          errorMsg={errors.phone?.message}
        />
      </fieldset>

      <p
        className="mt-8 w-full cursor-pointer text-center text-sm text-core-primary underline"
        onClick={() => {
          setIsSignUpAsCompany();
        }}
        tabIndex={0}
      >
        Sign up as a {isSignUpAsCompany ? "student" : "company"}
      </p>
      <Button
        isLoading={isPending}
        type="submit"
        className="mt-4 w-full"
        size="lg"
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
