function countdown(){
    setInterval(function(){

        let dest = new Date("December 25,2025,24:00:00").getTime();
        let curr = new Date().getTime();
        let diff = dest - curr;

        let day = Math.floor(diff/(1000*60*60*24));
        console.log(day);

        let hr = Math.floor(diff % (1000*60*60*24)/(1000*60*60));
        console.log(hr);

        let min = Math.floor(diff % (1000*60*60)/(1000*60));
        console.log(min);

        let sec = Math.floor(diff % (1000*60)/(1000));
        console.log(sec);

        document.getElementById("days").innerHTML = day +"<br/>"+"Day";
        document.getElementById("hrs").innerHTML = hr +"<br/>"+"Hr";
        document.getElementById("mins").innerHTML = min +"<br/>"+"Min";
        document.getElementById("secs").innerHTML = sec +"<br/>"+"Sec";
    },1000)
}

countdown();