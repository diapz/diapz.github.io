function greet(name)
{
    console.log(`Hello ${name}`);

    //document.getElementById("greet").innerHTML=`Hello ${name}`;
    document.querySelector(".greet").innerHTML=`Hello ${name}`;
}

function callAPI(){
    fetch('http://api.ipstack.com/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        document.querySelector("#todo1_id").innerHTML = json.id;
        document.querySelector("#todo1_title").innerHTML = json.title;
        document.querySelector("#todo1_completed").innerHTML = json.completed;
      });
}

greet("Clyde"); //Hello Clyde
callAPI();

const accessKey = "YOUR_ACCESS_KEY";
const fields = "ip,location,security";
const hostname = 1;
const security = 1;
const language = "en";
const callback = "MY_CALLBACK";
const output = "json";

// Construct the URL
const url = `http://api.ipstack.com/check?access_key=${accessKey}&fields=${fields}&hostname=${hostname}&security=${security}&language=${language}&callback=${callback}&output=${output}`;

// Perform the request
fetch(url)
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    console.log(data); // Handle the API response data
  })
  .catch(error => {
    console.error("Error fetching requester IP data:", error); // Handle errors
  });



