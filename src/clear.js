export function clearScreen() {
    const parentElement = document.getElementById('content');
    
    while (parentElement.firstChild) {
        if (parentElement.firstChild.nodeType === Node.ELEMENT_NODE) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }
}
