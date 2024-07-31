'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";


const dados = [
    {
        turma: '3222',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        icone: './informatica.svg',
        aulas: [
            {
                horas: '07:00 - 11:20',
                name: 'Segunda',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Terça',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quarta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quinta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Sexta',
            }
        ]
    },
    {
        turma: '3223',
        curso: 'Agronomia',
        semestre: '5 semestre',
        icone: './agronomia.svg',
        aulas: [
            {
                horas: '07:00 - 11:20',
                name: 'Segunda',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Terça',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quarta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quinta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Sexta',
            }
        ]
    },
    {
        turma: '3224',
        curso: 'Manutenção de Computadores',
        semestre: '1 semestre',
        icone: './manutenção.svg',
        aulas: [
            {
                horas: '07:00 - 11:20',
                name: 'Segunda',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Terça',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quarta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quinta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Sexta',
            }
        ]
    },
    {
        turma: '3225',
        curso: 'Analise de Sistemas',
        semestre: '2 semestre',
        icone: './informatica.svg',
        aulas: [
            {
                horas: '07:00 - 11:20',
                name: 'Segunda',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Terça',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quarta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Quinta',
            },
            {
                horas: '07:00 - 11:20',
                name: 'Sexta',
            }
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
                            <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100">
                                <Image 
                                    src={dado.icone}
                                    width={100}
                                    height={100}
                                    alt="logo curso"
                                />
                                <div>
                                    <div>
                                        <div>{dado.turma}</div>
                                        <div>{dado.curso}</div>
                                        <div>{dado.semestre}</div>
                                    </div>
                                    <div>
                                        {dado.aulas.map((item, index) => {
                                            return (
                                                <div key={index} className="flex gap-3">
                                                    <div>{item.name}</div>
                                                    <div>{item.horas}</div>
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