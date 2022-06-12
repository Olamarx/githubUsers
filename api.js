export default class Api {
  static getAPI (username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(res => {
        const position = document.querySelector('.user-github')
        const filt = res.updated_at.split('').splice(0, 10)
        const created = res.created_at.split('').splice(0, 10)
        const article = `
          <article class="art">
          <div class="img-div">
          <img src="${res.avatar_url}" class="image" alt="${res.name}"> 
          <h2 class="theName">${res.name}</h2>
          
          <h2 class="bio"> ${res.name}'s bio: ${res.bio}.</h2>
          <h2 class="followers"> ${res.name} has ${res.followers} followers and follows ${res.following} people.</h2>
          <h2 class="repos"> ${res.name} has ${res.public_repos} public repos.</h2>
          <h2 class="location"> ${res.name} is a citizen of ${res.location}.</h2>
          <h2 class="more-details"> ${res.name} created this account on: ${created.join('').replace(/-/g, ', ')} and updated it on: ${filt.join('').replace(/-/g, ', ')}.</h2>
      
          <a href="${res.html_url}" class="a-tag"> ${res.html_url}</a>
          </div>
          </article>
          `
        if (res.name === null) {
          const position = document.querySelector('.user-github')
          const article = `
              <article class="art color">
              <div class="img-div">
              No veried user as ${username}. ${username} is yet to set up the account properly.
              </div>
              </article>
              `
          position.innerHTML = article
        } else {
          position.innerHTML = article
        }
      })
      .catch(article => {
        const position = document.querySelector('.user-github')
        article = `
          <article class="art color">
          <div class="img-div">
          No User as such, kindly search for a valid user of Github.
          </div>
          </article>
          `
        position.innerHTML = article
      })
  }
}
