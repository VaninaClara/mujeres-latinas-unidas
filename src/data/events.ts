export interface Event {
  date: string;
  title: string;
  description: string;
}

const events: Event[] = [
  {
    date: "25/08/2025",
    title: "Taller de liderazgo femenino",
    description: "Un espacio para potenciar habilidades de liderazgo y trabajo en equipo."
  },
  {
    date: "10/09/2025",
    title: "Encuentro de networking",
    description: "Conectá con mujeres líderes de distintas áreas y emprendimientos."
  },
  {
    date: "20/09/2025",
    title: "Charla: Mujeres y tecnología",
    description: "Descubrí oportunidades en el mundo tech para mujeres."
  }
];

export default events;
