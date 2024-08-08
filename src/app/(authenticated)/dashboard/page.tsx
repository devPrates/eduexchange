'use client'
import DashCard from "@/components/DashCard";
import DashNavbar from "@/components/DashNavbar";
import { seed } from "@/dataDashboard";


export default function Dashboard() {
    const { cardData } = seed
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <DashNavbar title="Dashboard"/>
                <section className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                    {cardData.map((card =>{
                        return(
                            <DashCard
                                key={card.id}
                                amount={card.amout}
                                discription={card.description}
                                icon={card.icon}
                                label={card.Label}
                            />
                        )

                    }))
                    }
                </section>

                
                
            </div>
        </>
    )
}