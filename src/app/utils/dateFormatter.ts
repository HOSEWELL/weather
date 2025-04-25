export const formatTimestamp = (timestamp: any): string => {
  try {
    const dateObj = new Date(timestamp?.seconds ? timestamp.seconds * 1000 : timestamp);

    if (isNaN(dateObj.getTime())) return "Invalid date";

    const now = new Date();
    const today = now.toDateString();
    const dateString = dateObj.toDateString();

    if (dateString === today) {
      return dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return dateObj.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      }) + " " + dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  } catch (err) {
    console.error("Error formatting timestamp:", err);
    return "Invalid date";
  }
};

// formatted date
export const formatDateOnly = (timestamp: any): string => {
  try {
    const dateObj = new Date(timestamp?.seconds ? timestamp.seconds * 1000 : timestamp);

    if (isNaN(dateObj.getTime())) return "Invalid date";

    return dateObj.toLocaleDateString([], {
      weekday: 'short',
      month: 'short',  
      day: 'numeric',
    });
  } catch (err) {
    console.error("Error formatting date only:", err);
    return "Invalid date";
  }
};
