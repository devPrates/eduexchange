'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Handshake, KeySquare, TrendingUp  } from 'lucide-react';
import { ImageError } from "next/dist/server/image-optimizer";


export default function Why() {
    return (
        <section className="section flex items-center" id="why">
            <div className="container mx-auto">
                <h2>Serviços ofertados pelo nosso Sistema</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cumque quae quos, sapiente sit repudiandae repellendus itaque reprehenderit rem quis doloremque? Soluta laboriosam perspiciatis non ducimus cumque saepe harum sunt.
                </p>

                {/* serviços imagem */}
                <div>
                    <Image 
                        src={'./whyImage.svg'}
                        width={1060}
                        height={420}
                        alt="zz"
                    />
                </div>
            </div>
        </section>
    );
}