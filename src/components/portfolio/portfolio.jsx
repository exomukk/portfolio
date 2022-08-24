import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/risah.png'
import IMG2 from '../../assets/russianroulette.png'
import IMG3 from '../../assets/movie.png'
import IMG4 from '../../assets/tetris.png'
import IMG5 from '../../assets/creditcheck.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Risah's Blogs",
    github: 'https://github.com/huytran-cloud/risah',
    demo: 'https://risah-.glitch.me/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Russian Roulette',
    github: 'https://github.com/huytran-cloud/russian-roulette',
    demo: 'https://scratched-easy-motion.glitch.me/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Moviepoint',
    github: 'https://github.com/huytran-cloud/team-hihi',
    demo: 'https://phimmoifake.glitch.me/index.html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tetris',
    github: 'https://github.com/huytran-cloud/Tetris',
    demo: 'https://tetrls.glitch.me/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Credit Card Validation',
    github: 'https://github.com/huytran-cloud/CreditCardValidationUpgraded',
    demo: 'https://curse-cheerful-tuberose.glitch.me/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>

                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio