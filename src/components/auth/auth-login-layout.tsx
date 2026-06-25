function AuthLogInLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 lg:px-0">
      <div className="flex items-start justify-center">
        <p className="text-4xl tracking-widest">CI</p>
      </div>

      <div className="rounded-[32px] bg-white p-12 shadow-2xl md:min-w-[480px]">
        <div className="text-center">
          <h2 className="title-screen text-neutral-600">
            Sign in to Cyber Intern
          </h2>
          <p className="body-large mt-3 text-neutral-400">
            Enter the details below and sign in
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default AuthLogInLayout;
