document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.form_container');
    const storyResult = document.getElementById('story_result');
    const titleInput = document.getElementById('title_input');
    const mainTitle = document.getElementById('main_title');

    const submitButton = document.getElementById('submit_button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const nounValue = document.getElementById('noun').value;
        const verbValue = document.getElementById('verb').value;
        const adjectiveValue = document.getElementById('adjective').value;

        if (nounValue == '' || verbValue == '' || adjectiveValue == '') {
        alert('Please fill in all fields');
    } else {
        const adlibText = `Last night I ate a ${nounValue}, and today I just had to ${verbValue}. What a ${adjectiveValue} day!`;

        formContainer.style.display = 'none';

        storyResult.textContent = adlibText;
    }
  });

titleInput.addEventListener('input', () => {
        mainTitle.textContent = titleInput.value;
  });
});
