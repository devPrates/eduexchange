import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface ClassDetailsSheetProps {
    isOpen: boolean;
    onClose: () => void;
    classDetails: {
        subject: string;
        room: string;
        class: string;
        time: string;
        teacher: string;
    } | null;
}

const ClassDetailsSheet: React.FC<ClassDetailsSheetProps> = ({ isOpen, onClose, classDetails }) => {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full max-w-lg mx-auto">
                <SheetHeader>
                    <SheetTitle>Professores disponiveis</SheetTitle>
                </SheetHeader>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Tico Silva</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Teté Ribeiro</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Joaquim Mané</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </SheetContent>
        </Sheet>
    );
}

export default ClassDetailsSheet;