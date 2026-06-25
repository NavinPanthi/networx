import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import useEditProfileMutation from "../../services/auth/use-edit-profile-mutation";
import type { RootState } from "../../redux/store";
import type { IHandleEditProfile } from "../../pages/candidate/candidate-profile";
import { setUser } from "../../redux/slices/user-slice";
import { getInitialsTitle } from "../../utils/get-initials-title";
import Label from "../ui/label";
import TextInput from "../ui/text-input";
import Button from "../ui/button";

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required."),
    phone: yup.string().optional(),
    address: yup.string().optional(),
  })
  .required();
type EditProfileSchema = yup.InferType<typeof schema>;

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileSchema>({
    resolver: yupResolver(schema),
  });
  const { mutate: editProfile, isPending } = useEditProfileMutation();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.user);

  const handleEditProfile: SubmitHandler<IHandleEditProfile> = (data) => {
    const { fullName, phone, address } = data;
    const formData = new FormData();
    formData.set("fullName", fullName);

    if (phone) formData.set("phone", phone);
    if (address) formData.set("address", address);

    editProfile(formData);
    dispatch(setUser({ fullName, phone, address }));
  };

  useEffect(() => {
    if (!userData) return;

    reset({
      fullName: userData.fullName,
      phone: userData?.phone,
      address: userData?.address,
    });
  }, [userData]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-4 flex w-full flex-col items-center justify-center gap-4">
        <div className="flex size-40 items-center justify-center rounded-full border border-core-primary-light text-4xl tracking-widest">
          {userData && getInitialsTitle(userData?.fullName)}
        </div>
        <span className="text-2xl font-semibold">{userData?.fullName}</span>
      </div>
      <form className="mt-6 w-full" onSubmit={handleSubmit(handleEditProfile)}>
        <fieldset>
          <Label htmlFor="fullName">Full name</Label>

          <TextInput
            {...register("fullName")}
            id="fullName"
            placeholder="Enter your full name"
            errorMsg={errors.fullName?.message}
          />
        </fieldset>

        <fieldset className="mt-4">
          <Label htmlFor="email">Email</Label>

          <TextInput value={userData?.email} readOnly />
        </fieldset>

        <fieldset className="mt-4">
          <Label htmlFor="address" required={false}>
            Address
          </Label>
          <TextInput
            {...register("address")}
            id="address"
            placeholder="Enter your address"
            errorMsg={errors.address?.message}
          />
        </fieldset>
        <fieldset className="mt-4">
          <Label htmlFor="phone" required={false}>
            Phone
          </Label>
          <TextInput
            {...register("phone")}
            id="phone"
            placeholder="Enter your phone"
            errorMsg={errors.phone?.message}
          />
        </fieldset>

        <Button
          isLoading={isPending}
          type="submit"
          className="mt-4 w-full"
          size="lg"
        >
          Edit profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfileForm;
