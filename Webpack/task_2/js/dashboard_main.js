import $ from 'jquery';
// import lodash 
import _ from 'lodash';
// creating new elements
document.ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
    updateCounter();
});

updateCounter = () => {
    // tracks the # of times the button is clicked
    let counter = 0;
    // update counter and bind debounce func
    $('button').on('click', _.debounce(() => {
        counter++;
        $('#count').text(`${counter} clicks on the button`);
    }, 500));
};
