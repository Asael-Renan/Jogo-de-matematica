const socket = io();

const screens = {
    name: document.getElementById('name-container'),
    loading: document.getElementById('loading-container'),
    game: document.getElementById('game-container'),
}

socket.on('connect', () => {
    console.log('Conectado ao servidor');
});

function chooseName() {
    const inputValue = document.getElementById('name-input').value.trim()
    if (inputValue === '') {
        alert('Por favor, insira um nome')
        return
    }
    socket.emit('choose-name', { name: inputValue});
    screens.name.style.display = 'none'
    screens.loading.style.display = 'flex'
};