let a;
        let date;

        setInterval(() => {
        a = new Date;
        date = a.toLocaleDateString('en-GB');
        let time = a.getHours() + ':'+ a.getMinutes() +':'+ a.getSeconds();
       document.getElementById('time').innerHTML = time + " on " + date;
       console.log(date.toLocaleString('en-GB'));
    }, 1000);