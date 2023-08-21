console.log('“They think I am hiding in the shadows, but I am the shadows.”')

function change() {

  icon = document.getElementById('icon')
  
  if (icon.src.includes('batman')) {
    icon.src = './img/bruce.jpeg'
    document.getElementById('title').innerHTML = 'Bruce Wayne links 🧑'
    document.title = 'Bruce Wayne links'
    document.body.style.background = '#413D3A'
  } else {
    icon.src = './img/batman.jpg'
    document.getElementById('title').innerHTML = 'Batman links 🦇'
    document.title = 'Batman links'
    document.body.style.background = '#181C1B'
  }

}