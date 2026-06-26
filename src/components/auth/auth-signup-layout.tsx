function AuthSignUpLayout({
  isSignUpAsCompany,
  children,
}: {
  isSignUpAsCompany: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="my-2 flex flex-col items-center justify-center gap-4 px-4 lg:px-0">
      <div className="flex items-start justify-center">
        <p className="text-4xl tracking-widest">NX</p>
      </div>

      <div className="rounded-[32px] bg-white p-12 shadow-2xl md:min-w-[480px]">
        <div className="text-center">
          <h2 className="title-screen text-neutral-600">
            Sign up to Networx ({isSignUpAsCompany ? "Company" : "Student"})
          </h2>
          <p className="body-large mt-3 text-neutral-400">
            Enter the details below and sign up
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default AuthSignUpLayout;
