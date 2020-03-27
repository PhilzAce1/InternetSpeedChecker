console.log('i am working');
console.log(navigator.connection);
const renderValue = () => {
  console.log('something is about to happen');
  //   return (document.querySelector('#number').innerText =
  // navigator.connection.downlink);

  if (!navigator.connection) {
    if (alert('your browser does not support this feature')) {
      window.location.href = 'fast.com';
    }
  } else if (!navigator.onLine) {
    alert('You are offline ... please come online');
  } else {
    navigator.vibrate ? navigator.vibrate : null;
    document.querySelector('#number').innerText = navigator.connection.downlink;
    document.querySelector('#type').innerText =
      navigator.connection.effectiveType;
    document.querySelector('#rtt').innerText = navigator.connection.rtt;
    document.querySelector('#datasaver').innerText = navigator.connection
      .saveData
      ? 'On'
      : 'Off';
  }
};

document
  .querySelector('#reload')
  .addEventListener('click', () => renderValue());
window.onload = renderValue();
