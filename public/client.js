const socket = io();

class Screen {
    constructor() {
        this.selectedScreen = document.getElementById('name-screen')
    }

    toggle(screen) {
        const newScreen = document.getElementById(screen)
        if (!newScreen) throw new Error('Não existe a tela ' + screen)
        this.selectedScreen.style.display = 'none'
        newScreen.style.display = 'flex'
        this.selectedScreen = newScreen;
    }

}

const screen = new Screen()

socket.on('connect', () => {
    console.log('Conectado ao servidor');
});

function chooseName() {
    const inputValue = document.getElementById('name-input').value.trim()
    if (inputValue === '') {
        alert('Por favor, insira um nome')
        return
    }
    socket.emit('choose-name', { name: inputValue });
};

socket.on('host', role => {
    console.log('teste')
    if (role) {
        screen.toggle('host-screen')
    } else {
        screen.toggle('loading-screen')
    }
})

function startMatch() {

}