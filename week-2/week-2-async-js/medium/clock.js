// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)


console.log(new Date().toLocaleTimeString())

setInterval(()=>{

    let date = new Date();

    let formattedTime = date.toLocaleTimeString('en-US', { hour12: false }); // "23:30:00" for 24-hour format // "23:30:00" for 24-hour format
    console.log(formattedTime)

},1000)

// completed