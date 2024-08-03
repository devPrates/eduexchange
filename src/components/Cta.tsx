'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';
import { Label } from "@/components/ui/label"

export default function Cta() {
    return (
        <section className="pt-24  flex items-end pb-0 bg-[#b2b7c2]/10" id="contact">
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row xl:items-center xl:justify-around xl:gap-4'>

                    {/* help e perguntas frequentes */}
                    <div className='w-[50%] pb-5 flex justify-center items-center flex-col gap-3'>
                        <h2 className='h3 font-bold text-gray-700'>Suporte e Perguntas Frequentes</h2>
                        <Accordion  type="single" collapsible className="w-[75%] mx-auto">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className='px-2'>
                            <Button>Mais Informações</Button>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className='w-[50%]'>
                        <form action="">
                        <Label htmlFor="email">Your email address</Label>
                        <Input />

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}