import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { LoginUser, registerUser } from "../features/auth/authAPI";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1);
  const [profilePreview, setProfilePreview] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    reset();
    setStep(1);
    setProfilePreview(null);
  };

  const password = watch("password", "");

  // Validate current step before going next
  const nextStep = async () => {
    let stepFields = [];
    if (step === 1) stepFields = ["userName", "email", "phone", "gender"];
    if (step === 3) stepFields = ["password", "confirmPassword"];

    const valid = await trigger(stepFields);
    if (valid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onLoginSubmit = async (data) => {
  const filteredData = {
    userName: data.userName,
    password: data.password,
  };

  try {
    const resultAction = await dispatch(LoginUser(filteredData));
    if (LoginUser.fulfilled.match(resultAction)) {
      console.log("Login Success:", resultAction.payload);
      toast.success("Logged in successfully!");
    } else {
      toast.error(resultAction.payload || "Login failed!");
    }
  } catch (err) {
    console.error(err);
    toast.error("Login Error");
  }

  reset();
};


  const onRegisterSubmit = (data) => {

     // শুধু দরকারি fields select করা
  const filteredData = {
    userName: data.userName,
    email: data.email,
    phone: data.phone,
    gender: data.gender,
    password: data.password
  };

  // profilePic আলাদা handling করতে হবে যদি upload করতে চান
  if (data.profilePic && data.profilePic.length > 0) {
   // filteredData.profilePic = data.profilePic[0]; // single file
  }

  console.log("Filtered Data:", filteredData);


    const dt= dispatch(registerUser(filteredData));
    console.log(dt);
    
    console.log("Register Data:", dt);
    toast.success("Registration successful!");

    reset();
    setStep(1);
    setProfilePreview(null);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-4">
      <AnimatePresence>
        {isLogin ? (
          <motion.div
            className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
              Login
            </h2>
            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">userName</label>
               <input
  type="text"
  {...register("userName", {
    required: "userName required",
    pattern: {
      value: /^[a-zA-Z0-9_-]{2,15}$/,
      message: "Invalid userName (2-15 chars, letters/numbers/_/-)",
    },
  })}
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
                {errors.userName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password required",
                    minLength: { value: 6, message: "At least 6 characters" },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="font-semibold text-blue-600 hover:underline"
              >
                Register here
              </button>
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
              Registration
            </h2>

            {/* Step indicator */}
            <div className="mb-4 text-center">
              <p className="text-gray-600 font-medium">Step {step} of 2</p>
              <div className="flex justify-center mt-2">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`w-8 h-2 mx-1 rounded-full ${
                      step === s ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-5"
            >
              {/* Step 1 */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      {...register("userName", { required: "Name required" })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.userName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email",
                        },
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Phone</label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone required",
                        pattern: {
                          value: /^[0-9]{10,11}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Gender</label>
                    <select
                      {...register("gender", { required: "Gender required" })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password required",
                        minLength: { value: 6, message: "Min 6 chars" },
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: "Confirm password required",
                        validate: (val) =>
                          val === password || "Passwords do not match",
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                     {...register("profilePic", {
  validate: {
    fileSize: (value) => {
      if (!value || value.length === 0) return true;
      return (
        value[0].size <= 2 * 1024 * 1024 || "Max file size is 2MB"
      );
    },
    fileType: (value) => {
      if (!value || value.length === 0) return true;
      return (
        ["image/jpeg", "image/png", "image/gif"].includes(value[0].type) ||
        "Only JPG, PNG, GIF allowed"
      );
    },
  },
})}

                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          const preview = URL.createObjectURL(file);
                          setProfilePreview(preview);
                        }
                      }}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {errors.profilePic && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.profilePic.message}
                      </p>
                    )}

                    {profilePreview && (
                      <img
                        src={profilePreview}
                        alt="Preview"
                        className="mt-2 w-32 h-32 object-cover rounded-full border"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    Previous
                  </button>
                )}
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Register
                  </button>
                )}
              </div>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="font-semibold text-blue-600 hover:underline"
              >
                Login here
              </button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
