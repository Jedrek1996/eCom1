import React from "react";

const SignUp = () => {
  return (
    <section className=" bg-white py-28">
      <div className="flex justify-between align-element px-20 gap-5">
        <div className="text-2xl mr-20">
          Want more Elevated Faith? Sign up for SMS and get 15% OFF sent right
          to your phone!
        </div>

        <div className="ml-10">
          <input
            placeholder="Mobile Phone Number"
            className="border border-orange-400 outline-rose-800 my-6 w-30 h-10"
          ></input>

          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded duration-500 block mb-6">
            Sign Me Up!
          </button>
          <div className="text-sm font-extralight text-gray-600">
            By signing up via text, you agree to receive recurring automated
            marketing text messages from Elevated Faith at the cell number used
            when signing up. Consent is not a condition of any purchase. Msg &
            data rates may apply.<span className="underline">View Terms</span> &
            <span className="underline">Privacy.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
