import TurmaSlider from "./TurmaSlider";

export default function Turmas() {
    return (
        <section className="h-screen flex items-center" id="turmas">
            <div className="container mx-auto">
                <div className="flex justify-center mb-6">
                    <h1 className="h2">Quadro de Horarios de Aulas </h1>
                </div>
                <TurmaSlider />
            </div>
        </section>
    );
}