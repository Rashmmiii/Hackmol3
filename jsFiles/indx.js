shownotes();
function shownotes() {
    let newtxt = localStorage.getItem('notes');
    if (newtxt == null)
        noteObj = [];
    else 
        noteObj = JSON.parse(newtxt);
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
                <div class = "noteCard my-2 mx-2 card" style="width: 19rem;">
                    <div class="card-body">
                        <img id = "profid" src = "../images/hmf.jpg">
                        <br><br>
                        <h5 class="card-title">${index}</h5>
                        <br>
                        <span class="badge rounded-pill bg-secondary">${element}</span>
                        <br><br>
                        <a href = "">LinkedIn</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href = "">GitHub</a>
                    </div>
                </div>
                `;
    });
    let noteElem = document.getElementById('notes');
    if (noteObj.length != 0) {
        noteElem.innerHTML = html;
    }   
    else {
        noteElem.innerHTML = `Nothing to show. Add a note using "Add new note" button.`;
    }

}

let searchtxt = document.getElementById('srchbar');
searchtxt.addEventListener('input', function() {
    let inputVal = searchtxt.value.toLowerCase();
    
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("span")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
})


