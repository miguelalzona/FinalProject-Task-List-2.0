




const form = document.getElementById('form');
const name = document.getElementById('name');
const description = document.getElementById('description');
const assignTo = document.getElementById('assignTo');
const dueDate = document.getElementById('dueDate');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const nameValue = name.value.trim();
    const descriptionValue = description.value.trim();
    const assignToValue = assignTo.value.trim();
    const dueDateValue = dueDate.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else if (nameValue.length < 8 ) {
        setError(name, 'Please Provide Full Name');
    } else {
        setSuccess(name);
    }

    if(descriptionValue === '') {
        setError(description, 'Description is required');
    } else if (descriptionValue.length < 15 ) {
        setError(description, 'Please Provide a Description');
    } else {
        setSuccess(description);
    }

    if(assignToValue === '') {
        setError(assignTo, 'Is required');
    } else if (assignToValue.length < 8 ) {
        setError(assignTo, 'Please Provide full Name')
    } else {
        setSuccess(assignTo);
    }

    if(dueDateValue === '') {
        setError(dueDate, 'Please Provide Valid Date');
    } else if (dueDateValue !== dueDateValue) {
        setError(dueDate, "Invalid Date!");
    } else {
        setSuccess(dueDate);
    }

};

