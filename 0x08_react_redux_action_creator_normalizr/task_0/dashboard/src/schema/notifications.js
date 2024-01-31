// src/schema/notifications.js
import * as notificationsData from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {

  const notificationsArray = Object.values(notificationsData);
  const filteredNotifications = notificationsArray.filter((notification) => {
    return notification && notification.author && notification.author.id === userId;
  });

  const notificationsWithContext = filteredNotifications.map(
    (notification) => notification.context
  );

  return notificationsWithContext;
};

export { getAllNotificationsByUser };
