function UseLocalStorage(key, value) {
    JSON.stringify(localStorage.setItem(key, value))
    JSON.parse(localStorage.getItem(key))

    return value
}

export default UseLocalStorage;