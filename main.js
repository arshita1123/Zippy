var slider_img = document.querySelector(".slider-img");
var images=['life5.jfif','life1.jfif','life2.jfif','life3.jfif','life4.jfif','life-6.jfif','life7.jfif']
var i=0 //Current image index
function prev()
{
   if(i<=0)
   i=images.length;
   i--;
   return SetImg();
}
function next()
{
  if(i>=images.length-1)
  i=-1;
  i++;
  return SetImg();
}


function SetImg()
{
    return slider_img.setAttribute("src",'Images/'+images[i])
}