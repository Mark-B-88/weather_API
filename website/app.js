const apiKey = `2366e92eb251669bc8d3ad22e6fa4945&units=imperial`;
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;


const getWeather = async (url) => {
    let res = await fetch(url);

    try {
        let data = await res.json();
        return data;
    } catch (err) {
        console.log(`Error : ${err}`)
    }
}

const handleData = async () => {
    const zipCode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    const url = `${apiUrl}${zipCode}&APPID=${apiKey}`;

    if (zip.length === 0 || content.length === 0) {
        alert(`Please enter a valid zip code and also your feelings :-)`);
        return
    }

    let weatherInfo = await getWeather(url);
    let temp = weatherInfo.main.temp;

    // Create a new date instance dynamically with JS
    let d = new Date();

    // let date = d.getDate() + '.'+ (d.getMonth() + 1 )+ '.' + d.getFullYear();
    let date = `${(d.getMonth() + 1 )} / ${d.getDate()} / ${d.getFullYear()}`;

    const data = {
        date: date,
        temp: temp,
        content: content,
    }

    // Post the data to owr own server
    await postData("http://localhost:3000/projectData", data);

    // Update the UI
    updateUI();
    
    // Clear the form fields
    clearFields();
}


const updateUI = async () => {
    const dateTag = document.getElementById('date');
    const tempTag = document.getElementById('temp');
    const contentTag = document.getElementById('content');

    // Get data from server
    let UI_Data = await getData(`http://localhost:3000/projectData`);

    // Update the UI
    dateTag.innerHTML = `<p>Date : ${UI_Data.date}</p>`;
    tempTag.innerHTML = `<p>Temperature : ${Math.round(UI_Data.temp)}° degrees farenheit</p>`;
    contentTag.innerHTML = `<p>${UI_Data.content}</p>`;
}

const clearFields = () => {
    const textField = document.getElementById('feelings');
    const zipCode = document.getElementById('zip');

    textField.value = '';
    zipCode.value = '';
};

async function postData(url,data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json(); 
}

const getData = async (url) => {
    let res = await fetch(url);

    try {
        let data = res.json();
        console.log(data);
        
        return data;
    } catch(err){
        console.log(err);
    }
}

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', handleData);