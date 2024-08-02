'use client'

import Image from "next/image";
import { Phone, Mail, Copyright } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="pt-20 z-20">
            <div className="container mx-auto mb-24">
                {/* grid */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
                    <motion.div
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        {/* Logo */}
                        <Link to={'home'} smooth={true} spy={true} className="cursor-pointer">
                            <Image 
                                src={'/logo.svg'} 
                                alt="aa"
                                width={200}
                                height={200}
                            />
                        </Link>

                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique cum libero recusandae!</div>
                        <div className="flex flex-col gap-y-4 font-semibold"></div>

                    </motion.div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </footer>
    );
}