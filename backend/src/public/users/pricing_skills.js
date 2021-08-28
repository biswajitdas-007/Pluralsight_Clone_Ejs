function toggle(el) {
    if (el == "month") {
        document.querySelector("#plan-details").classList.add("active");
    } else {
        document.querySelector("#plan-details").classList.remove("active");
    }

}
