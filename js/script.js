var bookmarkName = document.getElementById('bookmarkName');

var bookmarkURL = document.getElementById('bookmarkURL');

var btnsubmit = document.getElementById('btnsubmit');

var modal = document.querySelector('#modal-body');

var closmodalbtn = document.querySelector('.close-modal');






var bookmarklist = [];













if (localStorage.getItem('BookmarkSaved') !== null) {

    bookmarklist = JSON.parse(localStorage.getItem('BookmarkSaved'));
    display();
}

var validbookmarkName = document.querySelector('#bookmarkName');
var validbookmarkURL = document.querySelector('#bookmarkURL');




    

validbookmarkName.addEventListener('input', function () {

var regex = /^(\w){3,}(\s*(\w){1,})*$/;
var myname = validbookmarkName.value;
  

    if (regex.test(myname) == true) {
       
       
        bookmarkName.classList.remove('is-invalid');
        bookmarkName.classList.add('is-valid');

        
    } else {
        
        bookmarkName.classList.add('is-invalid');
        
    }
})





validbookmarkURL.addEventListener('input', function () {

var regex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/){1}(\w){2,}\.(\w){2,}(\/)?((\w){0,}(\/){1}(\w){1,})*$/;
var myurl = validbookmarkURL.value;
  

    if (regex.test(myurl) == true) {
       
        console.log(true);
        bookmarkURL.classList.remove('is-invalid');
        bookmarkURL.classList.add('is-valid');

        
    } else {
        console.log(false);
        bookmarkURL.classList.add('is-invalid');
        
    }
})

closmodalbtn.addEventListener('click', function () {
    modal.classList.remove('show');
})




btnsubmit.onclick = inputValidation;


function inputValidation() {

    var nameregex = /^(\w){3,}(\s*(\w){1,})*$/;

    var urlregex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/){1}(\w){2,}\.(\w){2,}(\/)?((\w){0,}(\/){1}(\w){1,})*$/;

    var myname = validbookmarkName.value;
    var myurl = validbookmarkURL.value;

    if (urlregex.test(myurl) == true && nameregex.test(myname) == true) {
        submit();
    }

    else {
        modal.classList.add('show');
    }
}








function submit() {
 
    var bookmarks = {
        name: bookmarkName.value,
        url: bookmarkURL.value
    }
   
    bookmarklist.push(bookmarks);
    localStorage.setItem('BookmarkSaved', JSON.stringify(bookmarklist));
    display();
    reset();

}


function display() {
    var box = ``;
    for (var i = 0; i < bookmarklist.length; i++) {
        box = box +
            `<tr class="bg-light border border-top">
            <td class="p-2">${i + 1}</td>
            <td class="p-2">${bookmarklist[i].name}</td>           
            <td class="p-2"><a href= ${ bookmarklist[i].url}  target="_blank"><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
            <td class="p-2"><a href="#"><button onclick="deletebookmark(${i})" class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></a></td>
        </tr>`;

       
    }

     document.getElementById("tablebodycontent").innerHTML = box;
    
    
}

function deletebookmark(index) {
    
    bookmarklist.splice(index, 1);
    localStorage.setItem('BookmarkSaved', JSON.stringify(bookmarklist));
    display();
    
    
}

function reset() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
    bookmarkURL.classList.remove('is-valid');
    bookmarkName.classList.remove('is-valid');
    
}





 