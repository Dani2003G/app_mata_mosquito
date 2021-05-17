var Altura = 0
var Largura = 0
var Vidas = 1
var Tempo = 15
var CriaMosquitoTempo = 1500

var Nivel = window.location.search
Nivel = Nivel.replace('?', '')

if (Nivel === 'Normal') {
	CriaMosquitoTempo = 1500
} else if (Nivel === 'Dificil'){
	CriaMosquitoTempo = 1000
} else if (Nivel === 'ChuckNorris'){
	CriaMosquitoTempo = 750
}

function AjustarPalcoJogo(){
	Altura = window.innerHeight
	Largura = window.innerWidth

	console.log(Altura, Largura)
}

AjustarPalcoJogo()

var Cronometro = setInterval(function(){
	Tempo -= 1

	if (Tempo < 0) {
		clearInterval(Cronometro)
		clearInterval(CriarMosquito)
		window.location.href = ('vitoria.html')
	} else {
		document.getElementById('Cronometro').innerHTML = Tempo
	}
}, 1000)

function PosicaoRandomica(){
	if (document.getElementById('Mosquito')) {
		document.getElementById('Mosquito').remove()

		if (Vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('V' + Vidas).src="imagens/coracao_vazio.png"
			Vidas++
		}
	}

	var PosicaoX = Math.floor(Math.random() * Largura) - 90
	var PosicaoY = Math.floor(Math.random() * Altura) - 90

	PosicaoX = PosicaoX < 0 ? 0 : PosicaoX
	PosicaoY = PosicaoY < 0 ? 0 : PosicaoY

	var Mosquito = document.createElement('img')
	Mosquito.src = 'imagens/mosquito.png'
	Mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio()
	Mosquito.style.left = PosicaoX + 'px'
	Mosquito.style.top = PosicaoY + 'px'
	Mosquito.style.position = 'absolute'
	Mosquito.id = 'Mosquito'
	Mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(Mosquito)
}

function TamanhoAleatorio(){
	var Tamanho = Math.floor(Math.random() * 3)

	switch (Tamanho){
		case 0:
			return 'Mosquito1'
		case 1:
			return 'Mosquito2'
		case 2:
			return 'Mosquito3'
	}

}

function LadoAleatorio(){
	var Lado = Math.floor(Math.random() * 2)

	switch (Lado) {
		case 0:
			return 'LadoA'
		case 1:
			return 'LadoB'
	}
}