console.log('“They think I am hiding in the shadows, but I am the shadows.”') // something in the way, hmmmm

function change() {

  icon = document.getElementById('icon')

  if (document.body.id == 'bat-mode') {
    document.body.id = 'bruce-mode'
    document.querySelector("link[rel~='icon']").href = './img/tie.png';
    document.title = 'Bruce Links'
    icon.src = './img/bruce.jpeg'
    document.getElementById('bruce-links').style.display = 'block'
    document.getElementById('bat-links').style.display = 'none'
    document.getElementById('title').innerText = 'Bruce Links 👔'

  } else if (document.body.id == 'bruce-mode') {
    document.body.id = 'bat-mode'
    document.querySelector("link[rel~='icon']").href = './img/icon.png';
    document.title = 'Batman Links'
    icon.src = './img/batman.jpg'
    document.getElementById('bat-links').style.display = 'block'
    document.getElementById('bruce-links').style.display = 'none'
    document.getElementById('title').innerText = 'Batman Links 🦇'
  }

}
