const loginBtn = document.querySelector('.loginBtn')
const errorInfo = document.querySelector('.error')

const getUserData = () => {
    const username = document.getElementById('username').value.trim()
    const password = document.getElementById('password').value.trim()

    return { username, password }
}

const resetInputs = () => {
    document.querySelectorAll('input').forEach(input => {
        input.value = ''
    })
}

const resetError = () => {
    errorInfo.innerHTML = ''
}

const loginService = (e) => {
    e.preventDefault()
    const userData = getUserData()
    validateForm(userData)
}

const validateForm = (data) => {
    const errors = []

    if (!data.username) errors.push('Nazwa użytkownika jest wymagana.')
    else if (data.username !== 'sku') errors.push('Błędna nazwa użytkownika.')

    if (!data.password) errors.push('Hasło jest wymagane.')
    else if (data.password !== 'm1s1ek') errors.push('Błędne hasło.')

    if (errors.length > 0) {
        displayError(errors)
    } else {
        window.location.href = './pages/main.html'
        resetError()
        resetInputs()
    }
}

const displayError = (errors) => {
    errorInfo.innerHTML = errors.map(error => `<p>${error}</p>`).join('')
}

loginBtn.addEventListener('click', loginService)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        loginService(e)
    }
})