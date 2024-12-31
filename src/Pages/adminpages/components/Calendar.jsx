import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarDisplay = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyB1Lu__uoR0g2VDek_5wmEMRwbjtIcOzPI'
      );
      const data = await response.json();
      const formattedEvents = data.items.map((event) => ({
        title: event.summary,
        start: event.start.dateTime,
        end: event.end.dateTime,
      }));
      setEvents(formattedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
  );
};

export default CalendarDisplay;
