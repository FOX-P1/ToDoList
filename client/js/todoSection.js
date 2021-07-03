const checkboxes = document.querySelectorAll("input[type=checkbox][name=select]");
let enabledSettings = []

// checkbox.addEventListener('click', () => console.log("hello!!"));
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', () => {
        enabledSettings = 
            Array.from(checkboxes)
            .filter(i => i.checked)
            .map(i => i.id)
            console.log(enabledSettings);
    })
    enabledSettings = d
});

const handleCheck = () => {
    const { id } = videoContainer.dataset;
    fetch(`/${id}/check`, {
        method: "POST",
    });
};