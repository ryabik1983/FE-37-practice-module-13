export default async function observeCards(list) {
  const options = {
    root: list,
    rootMargin: '100px',
    threshold: 0,
  }

  const observer = new IntersectionObserver(clb, options)
  function clb(entries, observer) {
    entries.forEach((entry, index) => {
      console.log('entry', entry)
      entry.isIntersecting ? entry.target.classList.add('observe') : entry.target.classList.remove('observe')
    })
  }

  const itemsArr = [...list.children]
  itemsArr.forEach(li => {
    observer.observe(li)
  })
}
