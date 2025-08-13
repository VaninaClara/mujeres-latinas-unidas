import events from "../data/events";
import "./EventsAgenda.css";

const EventsAgenda = () => {
  return (
    <section className="events-agenda">
      <h2>📅 Próximos Eventos</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <div className="event-date">{event.date}</div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsAgenda;
