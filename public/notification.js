// // Thanks you Notifications API Todo Example
// // https://github.com/mdn/to-do-notifications

// console.log('Notification script loaded');
// // create trigger notfication buttons
// // to show on demo day

// // store times on local database? Maybe not.

// window.onload = () => {
//   console.log('Page Loaded');

//   function showRandomGratNotification() {
// 		console.log('show random Grat called!')

//     $.getJSON('http://localhost:8080/random', (data) => {
//       console.log('data', data)

//       // Let's check if the browser supports notifications
//     if (!"Notification" in window) {
//       console.log("This browser does not support notifications.");
//     }

//     // Let's check if the user is okay to get some notification
//     else if (Notification.permission === "granted") {
//       // If it's okay let's create a notification

//       // var img = '/to-do-notifications/img/icon-128.png';
//       var text = data.message
//       var notification = new Notification('To do list', { body: text });

//       // window.navigator.vibrate(500);
//     }

//     else if (Notification.permission !== 'denied') {
//       Notification.requestPermission(function (permission) {

//         // Whatever the user answers, we make sure Chrome stores the information
//         if(!('permission' in Notification)) {
//           Notification.permission = permission;
//         }

//         // If the user is okay, let's create a notification
//         if (permission === "granted") {
//           // var img = '/to-do-notifications/img/icon-128.png';
//           var text = data.message;
//           var notification = new Notification('To do list', { body: text });

//           // window.navigator.vibrate(500);
//         }
//       });
//     }
//     })

//   function showReminderCreateGrat() {
//     console.log('show reminder Grat called!');

//     // Let's check if the browser supports notifications
//     if (!'Notification' in window) {
//       console.log('This browser does not support notifications.');
//     } else if (Notification.permission === 'granted') {
//       // Let's check if the user is okay to get some notification
//       // If it's okay let's create a notification

//       var img = './public/img/gratIcon.png';
//       var text = 'Remember to add a new grat!';
//       var notification = new Notification('autoGrat', { icon: img, body: text });

//       notification.onclick = function(event) {
//         console.log('notficication clicked');
//         // event.preventDefault(); // prevent the browser from focusing the Notification's tab
//         // window.open('http://localhost:8080/addGrat', '_blank');
//         window.open('http://localhost:8080/addGrat', '_self');
//         window.focus();
//       };

//       // window.navigator.vibrate(500);
//     } else if (Notification.permission !== 'denied') {
//       Notification.requestPermission(function(permission) {
//         // Whatever the user answers, we make sure Chrome stores the information
//         if (!('permission' in Notification)) {
//           Notification.permission = permission;
//         }

//         // If the user is okay, let's create a notification
//         if (permission === 'granted') {
//           var img = './public/img/gratIcon.png';

//           var text = 'Remember to add a new grat!';
//           var notification = new Notification('AddGrat', { icon: img, body: text });

//           notification.onclick = function(event) {
//             console.log('notficication clicked');
//             // event.preventDefault(); // prevent the browser from focusing the Notification's tab
//             // window.open('http://localhost:8080/addGrat', '_blank');
//             window.open('http://localhost:8080/addGrat', '_self');
//             window.focus();
//           };

//           // window.navigator.vibrate(500);
//         }
//       });
//     }
//   }

//   // setInterval(showRandomGratNotification, 180000);
//   setInterval(showReminderCreateGrat, 5000);
// };

// Thanks you Notifications API Todo Example
// https://github.com/mdn/to-do-notifications

console.log('Notification script loaded');

window.onload = () => {
  console.log('Page Loaded');

  function showRandomGratNotification() {
    console.log('show random Grat called!');

    $.getJSON('http://localhost:8080/random', data => {
      console.log('data', data);

      // Let's check if the browser supports notifications
      if (!'Notification' in window) {
        console.log('This browser does not support notifications.');
      } else if (Notification.permission === 'granted') {
        // Let's check if the user is okay to get some notification
        // If it's okay let's create a notification

        var img = './public/img/gratIcon.png';
        var text = data.message;
        var notification = new Notification('autoGrat', { icon: img, body: text });
        notification.onclick = function(event) {
          console.log('notficication clicked');
          // event.preventDefault(); // prevent the browser from focusing the Notification's tab
          // window.open('http://localhost:8080/addGrat', '_blank');
          window.open(`http://localhost:8080/grats/${data.id}`, '_self');
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
            var text = data.message;
            var notification = new Notification('autoGrat', { icon: img, body: text });

            // window.navigator.vibrate(500);
          }
        });
      }
    });
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
      var notification = new Notification('autoGrat', { body: text, icon: img });

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
          var notification = new Notification('AddGrat', { body: text, icon: img });

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

  setInterval(showRandomGratNotification, 5000);
  setInterval(showReminderCreateGrat, 5000);
};
