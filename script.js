// Пример JavaScript кода
document.addEventListener('DOMContentLoaded', function() {
    console.log('Документ загружен!');

    // Пример обработки клика по заголовку
    const header = document.querySelector('header h1');
    header.addEventListener('click', function() {
        alert('Вы кликнули по заголовку!');
    });
});