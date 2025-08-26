import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Registration successful!");
    console.log("Form Data:", data);
    reset();
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-200 p-4">
      <motion.div
        className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={formVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
          </div>

          {/* Farm Type */}
          <div>
            <label className="block mb-1 font-medium">Farm Type</label>
            <select
              {...register("farmType", { required: "Farm type is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Farm Type</option>
              <option value="Dairy">Dairy</option>
              <option value="Poultry">Poultry</option>
              <option value="Crop">Crop</option>
              <option value="Mixed">Mixed</option>
            </select>
            {errors.farmType && <p className="text-red-500 text-sm mt-1">{errors.farmType.message}</p>}
          </div>

          {/* District */}
          <div>
            <label className="block mb-1 font-medium">District</label>
            <input
              type="text"
              placeholder="Your District"
              {...register("district", { required: "District is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
          </div>

          {/* Thana */}
          <div>
            <label className="block mb-1 font-medium">Thana</label>
            <input
              type="text"
              placeholder="Your Thana"
              {...register("thana", { required: "Thana is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.thana && <p className="text-red-500 text-sm mt-1">{errors.thana.message}</p>}
          </div>

          {/* P/O */}
          <div>
            <label className="block mb-1 font-medium">P/O</label>
            <input
              type="text"
              placeholder="Your Post Office"
              {...register("po", { required: "P/O is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.po && <p className="text-red-500 text-sm mt-1">{errors.po.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-lg"
            >
              Register
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
