// more shapes
import propTypes from 'prop-types';

const NotificationItemShape = propTypes.shape({
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string,
    html: propTypes.object,
});

export default NotificationItemShape;
