import axios from "axios";

export const getAllEvents = async function () {
  const response = await axios.get(
    "https://nextjs-course-a60fe-default-rtdb.firebaseio.com/events.json"
  );

  return Object.entries(response.data).map((doc) => ({
    id: doc[0],
    ...doc[1],
  }));
};

export const getFeaturedEvents = async function () {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured === true);
};

export const getEventById = async function (id) {
  const data = await getAllEvents();
  return data.find((doc) => doc.id === id);
};

export const getFilteredEvents = async function (dateFilter) {
  const events = await getAllEvents();
  const filteredEvents = events.filter((doc) =>
    doc.date.startsWith(dateFilter)
  );
  return filteredEvents;
};
