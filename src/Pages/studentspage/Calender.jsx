import React, { useEffect, useState } from 'react';
// import { google } from 'googleapis';

const StudentCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyB1Lu__uoR0g2VDek_5wmEMRwbjtIcOzPI'
      );
      const data = await response.json();
      setEvents(data.items);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.summary}</strong> - {event.start.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCalendar;
