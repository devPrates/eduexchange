'use client'

import React, { useState } from 'react';
import ClassDetailsSheet from './ClassDetailsSheet';

// Simula os dados da API
const scheduleData = [
    {
        day: 'Segunda-feira',
        date: '12/08',  // Exemplo de data
        classes: [
            { time: '08:00', subject: 'Matemática', room: '101', class: '5A' },
            { time: '09:00', subject: 'Inglês', room: '102', class: '5B' },
            { time: '10:00', subject: 'Ciências', room: '103', class: '5C', teacherId: 'prof123' },
            { time: '11:00', subject: 'História', room: '104', class: '5D' },
            { time: '12:00', subject: 'Geografia', room: '105', class: '5E' }
        ]
    },
    {
        day: 'Terça-feira',
        date: '13/08',
        classes: [
            { time: '08:00', subject: 'Matemática', room: '101', class: '5A' },
            { time: '09:00', subject: 'Inglês', room: '102', class: '5B' },
            { time: '10:00', subject: 'Ciências', room: '103', class: '5C' },
            { time: '11:00', subject: 'História', room: '104', class: '5D', teacherId: 'prof123' },
            { time: '12:00', subject: 'Geografia', room: '105', class: '5E' }
        ]
    },
    {
        day: 'Quarta-feira',
        date: '14/08',
        classes: [
            { time: '08:00', subject: 'Matemática', room: '101', class: '5A' },
            { time: '09:00', subject: 'Inglês', room: '102', class: '5B' },
            { time: '10:00', subject: 'Ciências', room: '103', class: '5C' },
            { time: '11:00', subject: 'História', room: '104', class: '5D' },
            { time: '12:00', subject: 'Geografia', room: '105', class: '5E', teacherId: 'prof123' }
        ]
    },
    {
        day: 'Quinta-feira',
        date: '15/08',
        classes: [
            { time: '08:00', subject: 'Matemática', room: '101', class: '5A' },
            { time: '09:00', subject: 'Inglês', room: '102', class: '5B' },
            { time: '10:00', subject: 'Ciências', room: '103', class: '5C' },
            { time: '11:00', subject: 'História', room: '104', class: '5D', teacherId: 'prof123' },
            { time: '12:00', subject: 'Geografia', room: '105', class: '5E' }
        ]
    },
    {
        day: 'Sexta-feira',
        date: '16/08',
        classes: [
            { time: '08:00', subject: 'Matemática', room: '101', class: '5A' },
            { time: '09:00', subject: 'Inglês', room: '102', class: '5B' },
            { time: '10:00', subject: 'Ciências', room: '103', class: '5C' },
            { time: '11:00', subject: 'História', room: '104', class: '5D' },
            { time: '12:00', subject: 'Geografia', room: '105', class: '5E' }
        ]
    }
];

interface ClassItem {
    time: string;
    subject: string;
    room: string;
    class: string;
    teacherId?: string;
}

interface DaySchedule {
    day: string;
    date: string;
    classes: ClassItem[];
}

interface Props {
    teacherId?: string;
}

const ScheduleTable: React.FC<Props> = ({ teacherId }) => {
    const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
    const [isSheetOpen, setSheetOpen] = useState<boolean>(false);

    const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00'];

    // Define o tipo da row para incluir chaves dinâmicas
    const tableData: { time: string } & Record<string, ClassItem | null>[] = timeSlots.map((timeSlot) => {
        const row: { time: string } & Record<string, ClassItem | null> = { time: timeSlot };
        daysOfWeek.forEach(day => {
            const dayData = scheduleData.find(d => d.day === day);
            const classItem = dayData?.classes.find(c => c.time === timeSlot);
            row[day] = classItem || null;
        });
        return row;
    });

    const handleCellClick = (classDetails: ClassItem) => {
        setSelectedClass(classDetails);
        setSheetOpen(true);
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Horário</th>
                            {scheduleData.map(day => (
                                <th key={day.day} className="border border-gray-300 p-2">
                                    {day.day} {day.date}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="border border-gray-300 p-2">{row.time}</td>
                                {daysOfWeek.map(day => (
                                    <td
                                        key={day}
                                        className={`border border-gray-300 p-2 ${row[day]?.teacherId ? 'bg-yellow-100 cursor-pointer' : 'bg-gray-50'}`}
                                        onClick={() => row[day] && handleCellClick(row[day])}
                                    >
                                        {row[day] ? (
                                            <div>
                                                <div className="font-medium">{row[day]?.subject}</div>
                                                <div className="text-xs text-gray-600">Sala: {row[day]?.room}</div>
                                                <div className="text-xs text-gray-600">Turma: {row[day]?.class}</div>
                                            </div>
                                        ) : (
                                            <div className="text-gray-500">Sem Aula</div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ClassDetailsSheet
                isOpen={isSheetOpen}
                onClose={() => setSheetOpen(false)}
                classDetails={selectedClass ? {
                    subject: selectedClass.subject,
                    room: selectedClass.room,
                    class: selectedClass.class,
                    time: selectedClass.time,
                    teacher: 'Nome do Professor' // Substitua com o nome real do professor, se disponível
                } : null}
            />
        </>
    );
}

export default ScheduleTable;