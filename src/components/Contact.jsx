import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Entre em contato</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">Fortaleza-CE</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">(85) - 98753-8607</motion.p>
                <motion.a

                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} 
                    href="#" className="border-b">dsaraujo718@gmail.com</motion.a>
            </div>
        </div>
    )
}