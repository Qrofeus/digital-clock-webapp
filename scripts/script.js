let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

function update_time(){
    let now = new Date();
    console.log(now);

    hrs.innerHTML = (now.getHours() < 10? "0":"") + now.getHours();
    mins.innerHTML = (now.getMinutes() < 10? "0":"") + now.getMinutes();
    secs.innerHTML = (now.getSeconds() < 10? "0":"") + now.getSeconds();
}

function main(){
    setInterval(update_time, 1000);
}

main();