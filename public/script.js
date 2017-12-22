console.log('hello from the browser JavaScript')

document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('like-btn')
  const likeCounter = document.querySelector('#like-counter')
  const likeAmount = document.querySelector('#like-amount')
  let counter = Number(likeCounter.innerHTML)

  const updateLike = (event) => {
    event.preventDefault()
    const albumId = likeAmount.getAttribute('data-album')
    fetch(`/api/likes/${albumId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({albumId}),
    })
      .then((response) => {
        console.log(response)
        likeBtn.style.borderColor = 'red'
        counter += 1
        likeCounter.innerHTML = counter
      })
      .catch((err) => {
        console.error(err)
      })
  }

  likeBtn.addEventListener('click', updateLike)
})
