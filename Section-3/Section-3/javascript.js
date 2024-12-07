function findLargest() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    const largest = Math.max(...numbers);
    document.getElementById('largestResult').innerText = isNaN(largest) ? 'Enter valid numbers' : `Largest number: ${largest}`;
}

function reverseString() {
    const input = document.getElementById('string').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseResult').innerText = input ? `Reversed string: ${reversed}` : 'Enter a valid string';
}

function areElementsUnique(array) {
    return new Set(array).size === array.length;
}

function checkUnique() {
    const input = document.getElementById('uniqueNumbers').value;
    const numbers = input.split(',').map(Number);
    const unique = areElementsUnique(numbers);
    document.getElementById('uniqueResult').innerText = unique ? 'All elements are unique' : 'There are duplicate elements';
}