window.addEventListener("DOMContentLoaded", (event) => {
    const rating_state_buttons = document.querySelectorAll('.rating-state__star-item-button')
    const thank_box_selected = document.querySelector('#thank-box__selected')
    const submit_button = document.querySelector('#rating-state__btn-submit')
    const rating_state = document.querySelector('#rating-state')
    const thank_state = document.querySelector('#thank-state')

    rating_state_buttons.forEach((el) => {
        el.addEventListener('click', function(e){
            e.preventDefault()
            thank_box_selected.innerHTML = el.textContent
            rating_state_buttons.forEach((button) => button.classList.remove('is-selected'))
            el.classList.toggle('is-selected')
            submit_button.removeAttribute('disabled')
        })
    })

    submit_button.addEventListener('click', function (e){
        e.preventDefault()

        rating_state.classList.add('hide')
        thank_state.classList.add('show')
    })
});