"use client"
import Textanimate from "../../components/Textanimate";
import Button from "../../components/Button";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <motion.div
        initial={{ opacity:0, scale:0.5 }} 
        animate={{ opacity:1, scale:1}}
        transition={{ duration: 1 }}
        className="flex flex-col gap-10 justify-center items-center h-screen text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        <Textanimate />
        <Button />
      </motion.div>
  );
}
