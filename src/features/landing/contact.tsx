import { useNavigate } from "react-router-dom";

import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "../../components/ui/button";
import Label from "../../components/ui/label";
import TextInput from "../../components/ui/text-input";
import TextAreaInput from "../../components/ui/textarea";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = () => {
    toast.success("Message sent");
    reset();
  };

  return (
    <section className="w-full bg-white px-4 py-16 font-sans lg:px-24">
      <div className="mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-600">
            Have questions or want to learn more about our thrift collection?
            Send us a message and we’ll get back to you soon!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label
                className="mb-1 block text-sm text-gray-700"
                htmlFor="name"
              >
                Name
              </Label>
              <TextInput
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 px-4 py-2"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label
                className="mb-1 block text-sm text-gray-700"
                htmlFor="email"
              >
                Email
              </Label>
              <TextInput
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-4 py-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label
                className="mb-1 block text-sm text-gray-700"
                htmlFor="message"
              >
                Message
              </Label>
              <TextAreaInput
                id="message"
                rows={4}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-300 px-4 py-2"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </div>

        <div className="h-full w-full">
          <iframe
            title="Google map"
            className="w-full overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37709.9859264139!2d-2.2912396572752836!3d53.79172794269293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9042f0923d57%3A0x4feaa828ce73e4cb!2sBurnley!5e0!3m2!1sen!2suk!4v1762177846769!5m2!1sen!2suk"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
