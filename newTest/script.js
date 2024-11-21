window.onload = function() {
    const accessKey = "YOUR_ACCESS_KEY"; // Replace with your actual access key
    const url = `http://api.ipstack.com/check?access_key=${accessKey}&fields=ip,location,security&hostname=1&security=1&language=en&output=json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById('response').textContent = `Error: ${error.message}`;
      });
  };