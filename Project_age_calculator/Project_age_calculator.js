// let date = new Date("11/18/1996");






// document.write(difference_in_years);

function calculate() {
    let x = document.getElementById("input").value;
    let date1 = new Date(x)
    let date2 = new Date();

    let difference_in_time = ""
    difference_in_time = (date2.getTime()) - ((date1).getTime());

    let difference_in_years = difference_in_time / (1000 * 60 * 60 * 24 * 365);

    difference_in_years = Math.floor(difference_in_years)

    document.getElementById("output").innerHTML = " " + difference_in_years + " years.";

    let difference_in_months = difference_in_time / (1000 * 60 * 60 * 24 * 12)
    difference_in_months = Math.floor(difference_in_months)

    document.getElementById("output1").innerHTML = " " + difference_in_months + " months.";
}


// 1 sec = 1000 ms
// 1 min = 60 sec
// 1 hour = 60 min
// 1 day = 24hrs
// 1 year = 365 days