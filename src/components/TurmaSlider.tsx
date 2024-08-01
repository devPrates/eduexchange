'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";


const dados = [
    {
        tipo: 'Troca de Aula',
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        aulas: [
            {
                sala: 'Laboratorio de Informatica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        aulas: [
            {
                sala: 'Laboratorio de Informatica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        aulas: [
            {
                sala: 'Laboratorio de Informatica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        aulas: [
            {
                sala: 'Laboratorio de Informatica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        aulas: [
            {
                sala: 'Laboratorio de Informatica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
            },
        ]
    },

]

export default function TurmaSlider() {
    return (
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="container mxauto"
        >
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    640: { slidesPerView: 2, spaceBetween: 32 },
                    1260: { slidesPerView: 3, spaceBetween: 32 },
                }}
            >
                {dados.map((dado, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                        >
                            <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100 px-6 rounded-lg shadow-lg">
                                <h3 className="h3 flex justify-center">{dado.tipo}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-700">{dado.curso}</p>
                                    <p>{dado.turma}</p>
                                </div>
                                    <p>{dado.semestre}</p>
                                <div className="mt-4">
                                    <div>
                                        {dado.aulas.map((item, index) => {
                                            return (
                                                <div key={index} className="flex gap-3">
                                                    <div className="flex ">
                                                        {item.Professor}
                                                        {item.data}
                                                        {item.horas}
                                                        {item.sala}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <Button>Detalhes</Button>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </motion.div>
    );
}