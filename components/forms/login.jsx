const Login = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="form-container-bg ml-3">
            <div className="form-content-wrapper">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">
                    Lets catch up
                  </p>
                  <h2 className="text-3xl font-bold lg:text-5xl md:text-4xl text-gray-900 xl:text-6xl ">
                    Abolfazl Naser Ranjbar, React and Next.js Engineer
                  </h2>
                </div>
                <p className="text-base max-w-2xl md:text-lg lg:text-xl text-gray-700 ">
                  Weve created a simple formula to follow in order to gain more
                  out of your business and your application. Advanced JavaScript
                  and TS ES9+,React SPA,Next.js Multipage Apps.
                </p>
                <p className="text-base max-w-2xl md:text-lg lg:text-xl text-gray-700 ">
                  Ive gained exprience Designing Mobile-First Fully Responsive
                  UI/UX with Tailwind Css , Material UI Mui5 at Enterprise
                  Scale.
                </p>
                <a href="#" className="form-cta-btn self-center  sm:self-start">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-3xl font-bold">Signup</h4>
              <p className="text-lg text-gray-500">
                or, if you have an account you can
                <a href="#_" className="text-blue-600 underline">
                  sign in
                </a>
              </p>
              <div className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <label className="font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                  />
                </div>
                <div className="relative">
                  <a href="#_" className="form-btn-cta">
                    Create Account
                  </a>
                  {/* <a href="#_" className="form-btn-blank">
                    Sign up with Google
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
