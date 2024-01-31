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
  const filteredNotifications = notificationsArray.filter((notification) => {
    return notification && notification.author && notification.author.id === userId;
  });

  const normalizedNotifications = normalize(filteredNotifications, [notification]);

  return normalizedNotifications.result.map(id => normalizedNotifications.entities.notifications[id]);
};

export { getAllNotificationsByUser };
