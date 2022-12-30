function UseLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    const output = JSON.parse(localStorage.getItem(key))
    return output
}

export default UseLocalStorage;