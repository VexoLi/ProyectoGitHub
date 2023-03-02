function validar()
{
    let name = validar_name();
    let email = validar_email();
    let topics = validar_topics();
    let duration = validar_duration();

    return name && email && topics && duration;
}

function validar_name()
{
    let pattern = /^[A-Z][a-z]+( [A-Z](\.|[a-z]+))?( [A-Z][a-z]+){1,2}$/;
    let element = document.querySelector('#name');
    let message = document.querySelector('label[for="name"] span');

    if (element.value.length !== 0)
    {
        if (pattern.test(element.value))
        {
            message.innerHTML = "";
            return true;
        }
        message.innerHTML = "Incorrect";
        message.style.color = "orange";
        return false;
    }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}

function validar_email()
{
    let pattern = /^[a-z]{3,}(([.][a-z]{3,})*|(_[a-z]{3,})*)?@[a-z]{3,}[.][a-z]{2,4}$/;
    let element = document.querySelector('#email');
    let message = document.querySelector('label[for="email"] span');

    if (element.value.length !== 0)
    {
        if (pattern.test(element.value))
        {
            message.innerHTML = "";
            return true;
        }
        message.innerHTML = "Incorrect";
        message.style.color = "orange";
        return false;
    }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}

function validar_topics()
{
    let elementArray = document.querySelectorAll('input[name="topics"]');
    let message = document.querySelector('#topics span');

    let counter = 0;
    for (let i = 0; i < elementArray.length; i++)
        if (elementArray[i].checked)
            counter++;

    if (counter < 2)
    {
        message.innerHTML = "Choose at least two";
        message.style.color = "red";
        return false;
    }
    message.innerHTML = "";
    return true;
}

function validar_duration()
{
    let elementArray = document.querySelectorAll('input[name="duration"]');
    let message = document.querySelector('#duration span');

    for (let i = 0; i < elementArray.length; i++)
        if (elementArray[i].checked)
        {
            message.innerHTML = "";
            return true;
        }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}