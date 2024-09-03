function myDate() {
  var inputValue = document.getElementById('date').value.trim();

  //give your own condition in the if and else if statement

  if (inputValue === '8') {
      var newH1 = document.createElement('h1');
      newH1.textContent = 'Happy'; //replace your text
      document.getElementById('container').appendChild(newH1);
  }

  else if (inputValue === '4') {
     
     var x = document.createElement('h1');
     x.textContent = 'Teachers day'; // replace your text
     document.getElementById('container').appendChild(x);
   }
  
   else if (inputValue === '2004') {

     var image = document.createElement('img');
     image.setAttribute('src' , 'C:/Users/Dhinesh/OneDrive/Desktop/Birthday/heart.ico');// use correct path
     image.setAttribute('alt' , 'na');
     image.setAttribute('height' , '70px');
     image.setAttribute('width' , '70px');
     document.getElementById('container').appendChild(image);
   }

   else if (inputValue === 'dhivya@20'){
      

      var x = document.createElement('h1');
     x.textContent = 'Use Headphones For Better Experience';
     document.getElementById('container2').appendChild(x);

      
   }

   else if (inputValue === 'ok'){
      const video = document.createElement('video');
      video.src = ''; // paste your video path here
      
      video.controls = true;
      video.muted = false;
      video.height = 600;
      video.width = 1000;

      const box = document.getElementById('box');
      box.appendChild(video);
   }
  
}