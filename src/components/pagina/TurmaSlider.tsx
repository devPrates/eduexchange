'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/types/variants";
import { Button } from "../ui/button";
import { UserRound, BookText, Calendar, Clock, MapPin, GitCompareArrows, GitPullRequestArrow } from 'lucide-react';
import { Separator } from "../ui/separator";

const dados = [
    {
        tipo: 'Substituição',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Sergio',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Substituição',
        curso: 'Agronomia',
        semestre: '10 semestre',
        turma: '3234',
        aulas: [
            {
                materia: 'Topografia',
                Professor: 'Augusto',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio 3',
            },
        ]
    },
    {
        tipo: 'Substituição',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Estatistica',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Substituição',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Caio',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Substituição',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Nicolas',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
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
                            <div className="max-w-[385px] mx-auto sm:mx-0 bg-green-100 px-6 py-4 rounded-l  g shadow-xl h-56">
                                <h3 className="font-semibold text-3xl text-gray-700 flex justify-center mb-3">{dado.tipo}</h3>

                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-700">{dado.curso}</p>
                                </div>
                                <Separator className="bg-gray-300"/>
                                <div className="mt-4">
                                    <div>
                                        {dado.aulas.map((item, index) => {
                                            return (
                                                <div key={index} className="flex flex-col gap-2">
                                                    <p>A turma {dado.turma} tera a aula de {item.materia} substituida pela materia {item.materia} junto com o professor {item.Professor} </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </motion.div>
    );
}