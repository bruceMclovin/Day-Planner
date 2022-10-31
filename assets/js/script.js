const m = moment();

console.log(m.format("dddd"));
DisplayDate();

function DisplayDate()
{
    var date = m.format("MMM Do YY");

    $("#currentDay").text(date);
}
