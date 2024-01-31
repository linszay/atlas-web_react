import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
},
{
  idAttribute: "id"
}
);

const getAllNotificationsByUser = (userId) => {
  const notificationsArray = Object.values(notificationsData);
  const normalizedNotifications = normalize(notificationsArray, [notification]);

  const filteredNotifications = normalizedNotifications.result.filter((id) => {
    const notification = normalizedNotifications.entities.notifications[id];
    return notification && notification.author && notification.author.id === userId;
  });

  return filteredNotifications.map((id) => normalizedNotifications.entities.notifications[id]);
};


export { getAllNotificationsByUser };
