import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../features/emp/empAPI";

const MyProfile = () => { 
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.userR);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold text-gray-600">
        Loading Profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 font-bold text-xl">
        {error}
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
      >
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <motion.img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.userName}`}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          {/* Name + Role */}
          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            {user.userName}
          </h1>
          <p className="text-purple-600 font-semibold">{user.role}</p>
        </div>

        {/* Details */}
        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <span className="font-semibold">📧 Email: </span>
            {user.email}
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <span className="font-semibold">📱 Phone: </span>
            {user.phone}
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <span className="font-semibold">⚧ Gender: </span>
            {user.gender}
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <span className="font-semibold">✅ Active: </span>
            {user.active ? "Yes" : "No"}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyProfile;