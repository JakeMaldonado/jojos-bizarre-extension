(function() {
  const img = document.createElement("img");

  img.style.position = 'fixed'
  img.style.width = '20vw'
  img.style.zIndex = '99'
  img.style.bottom = '0'
  img.style.float = 'left'

  img.src = "https://img.pngio.com/jjba-to-be-continued-arrow-by-bahyyazidramadhan-on-deviantart-to-be-continued-arrow-png-600_338.png";
  
  const src = document.getElementsByTagName('body')[0];
  
  
  const iFrameWrapper = document.createElement('div');
  iFrameWrapper.style.display = "none"

  iFrameWrapper.innerHTML  = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/137624004&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'

  setTimeout(() => {
    src.appendChild(img);
    src.style.filter = "sepia(80%)" 
  }, 45000);

  src.appendChild(iFrameWrapper);
})()
