// Thanks you Notifications API Todo Example
// https://github.com/mdn/to-do-notifications

console.log('Notification script loaded');
// create trigger notfication buttons
// to show on demo day

// store times on local database? Maybe not.

window.onload = () => {
  console.log('Page Loaded');

  function showRandomGratNotification() {
    console.log('show random Grat called!');

    // Let's check if the browser supports notifications
    if (!'Notification' in window) {
      console.log('This browser does not support notifications.');
    } else if (Notification.permission === 'granted') {
      // Let's check if the user is okay to get some notification
      // If it's okay let's create a notification

      var img = './img/gratIcon.png';
      var text = 'HEY! Your task is now overdue.';
      var notification = new Notification('autoGrat', { icon: img, body: text });

      // window.navigator.vibrate(500);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        // Whatever the user answers, we make sure Chrome stores the information
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }

        // If the user is okay, let's create a notification
        if (permission === 'granted') {
          var img = './img/gratIcon.png';
          var text = 'HEY! Your task is now overdue.';
          var notification = new Notification('autoGrat', { icon: img, body: text });

          // window.navigator.vibrate(500);
        }
      });
    }
  }

  function showReminderCreateGrat() {
    console.log('show reminder Grat called!');

    // Let's check if the browser supports notifications
    if (!'Notification' in window) {
      console.log('This browser does not support notifications.');
    } else if (Notification.permission === 'granted') {
      // Let's check if the user is okay to get some notification
      // If it's okay let's create a notification

      var img = './public/img/gratIcon.png';
      var text = 'Remember to add a new grat!';
      var notification = new Notification('autoGrat', { icon: img, body: text });

      notification.onclick = function(event) {
        console.log('notficication clicked');
        // event.preventDefault(); // prevent the browser from focusing the Notification's tab
        // window.open('http://localhost:8080/addGrat', '_blank');
        window.open('http://localhost:8080/addGrat', '_self');
        window.focus();
      };

      // window.navigator.vibrate(500);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        // Whatever the user answers, we make sure Chrome stores the information
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }

        // If the user is okay, let's create a notification
        if (permission === 'granted') {
          var img = './public/img/gratIcon.png';

          var text = 'Remember to add a new grat!';
          var notification = new Notification('AddGrat', { icon: img, body: text });

          notification.onclick = function(event) {
            console.log('notficication clicked');
            // event.preventDefault(); // prevent the browser from focusing the Notification's tab
            // window.open('http://localhost:8080/addGrat', '_blank');
            window.open('http://localhost:8080/addGrat', '_self');
            window.focus();
          };

          // window.navigator.vibrate(500);
        }
      });
    }
  }

  // setInterval(showRandomGratNotification, 180000);
  setInterval(showReminderCreateGrat, 5000);
};
