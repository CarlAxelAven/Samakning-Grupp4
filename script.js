// //Kod för att öppna och stänga hamburgermenyn
// $(document).ready(function(){
//     $(".burger-nav").on("click", function(){
//         $(".navbar").toggleClass("open");
//     });
// });
const form = document.getElementById('form');
const namn = document.getElementById('namn');
const ägare = document.getElementById('ägare');
const platser = document.getElementById('platser');
const från = document.getElementById('från');
const till = document.getElementById('till');
const datum = document.getElementById('datum');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

function validateInputs() {
    const namnValue = namn.value.trim();
    const frånValue = från.value.trim();
    const tillValue = till.value.trim();
    const ägareValue = ägare.value.trim();
    const platserValue = platser.value.trim();
    const datumValue = datum.value.trim();

    if(namnValue == ''){
        validateError(namn, 'Du måste fylla i ditt namn');
    }
    else{
        validateSuccess(namn);
    }

    if(frånValue == ''){
        validateError(från, "Ange var du vill resa ifrån");
    }
    else{
        validateSuccess(från);
    }

    if(tillValue == ''){
        validateError(till, "Ange var du vill resa till");
    }
    else {
        validateSuccess(till)
    }
    //Ägare not working, need to figure out how to assign it to a select input.
    //Maybe set initial value to 0 in html?
    if(ägareValue == ''){
        validateError(ägare, "Välj om du är ägare eller passagerare");
    }
    else{
        validateSuccess(ägare);
    }
    if(platserValue == ''){
        validateError(platser, "Ange antal sittplatser i bilen");
    }
    else{
        validateSuccess(platser);
    }
    //Add filter to not allow past dates in input.
    if(datumValue == ''){
        validateError(datum, "Du måste välja ett datum");
    }
    else{
        validateSuccess(datum);
    }



}

//Is not quite working yet, just need to connect it somehow.
function validateSuccess(input){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success';
    const clear = inputControl.querySelector('input')
}

function validateError(input, errorMsg){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control failed';
    const small = inputControl.querySelector('small');

    small.innerText = errorMsg;
}