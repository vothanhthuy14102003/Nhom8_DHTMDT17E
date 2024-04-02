const playBtns = document.querySelectorAll('.play__btn');

playBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoWrapper = btn.closest('.video_block_inner').querySelector('.video__wrapper');
    videoWrapper.querySelector('iframe').classList.remove('hidden');
  });
});