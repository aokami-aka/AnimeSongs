document.addEventListener('play', function(e){  
    var audios = document.getElementsByTagName('audio');  
    var videos = document.getElementsByTagName('video'); 
    for(var i = 0, len = audios.length; i < len;i++){  
        if(audios[i] != e.target){  
            audios[i].pause();
        }  
    } 
    for(var i = 0, len = videos.length; i < len;i++){  
        if(videos[i] != e.target){  
            videos[i].pause();
        }  
    }    
}, true);

const tagsDeAudio = document.getElementsByTagName('audio');
const volumeInicial = 0.3;

for (let i = 0; i < tagsDeAudio.length; i++) {
  tagsDeAudio[i].volume = volumeInicial;
}
