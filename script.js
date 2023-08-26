console.log('“They think I am hiding in the shadows, but I am the shadows.”') // something in the way, hmmmm

function changeMode() {

  favicon = document.querySelector("link[rel~='icon']")
  site = document
  body = document.body
  pageTitle = document.getElementById('title')
  profileImage = document.getElementById('profile')
  batLinks = document.getElementById('bat-links')
  bruceLinks = document.getElementById('bruce-links')

  // change bat to bruce
  if (document.body.id == 'bat-mode') {
    body.id = 'bruce-mode'
    favicon.href = './img/tie-icon.png';
    site.title = 'Bruce Links'
    profileImage.src = './img/bruce.jpeg'
    pageTitle.innerHTML = 'Bruce Links'
    bruceLinks.style.display = 'flex'
    batLinks.style.display = 'none'

    // change bruce to bat
  } else if (document.body.id == 'bruce-mode') {
    body.id = 'bat-mode'
    favicon.href = './img/bat-icon.png';
    site.title = 'Batman Links'
    profileImage.src = './img/batman.jpg'
    pageTitle.innerHTML = 'Batman Links'
    batLinks.style.display = 'flex'
    bruceLinks.style.display = 'none'
  }

}
