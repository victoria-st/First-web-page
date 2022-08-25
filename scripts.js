function getId(btn)
{
    if ((btn.id) === "2000") {
        document.getElementById("answer").innerHTML = "American Beauty";
    } else if ((btn.id) === "2010") {
        document.getElementById("answer").innerHTML = "The Hurt Locker";
    } else {
        document.getElementById("answer").innerHTML = "Parasite";
    }
}