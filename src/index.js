import "../scss/main.scss";
import aboutImg from '../src/assets/about-img.jpg'
import blogImg1 from '../src/assets/blog-props.jpg'
import blogImg2 from '../src/assets/blog-place.jpg'
import blogImg3 from '../src/assets/blog-winter.jpg'
import blogImg4 from '../src/assets/blog-kids.jpg'
import blogImg5 from '../src/assets/blog-pro.jpg'
import blogImg6 from '../src/assets/blog-display.jpg'
import work1 from '../src/assets/work1.jpg'
import work2 from '../src/assets/work2.jpg'
import work3 from '../src/assets/work3.jpg'
import work4 from '../src/assets/work4.jpg'

const aboutImage = document.getElementById('about-img')
aboutImage.setAttribute('src',aboutImg)

const blogImage1 =document.getElementById('blog-1')
const blogImage2 =document.getElementById('blog-2')
const blogImage3 =document.getElementById('blog-3')
const blogImage4 =document.getElementById('blog-4')
const blogImage5 =document.getElementById('blog-5')
const blogImage6 =document.getElementById('blog-6')

blogImage1.setAttribute('src', blogImg1)
blogImage2.setAttribute('src', blogImg2)
blogImage3.setAttribute('src', blogImg3)
blogImage4.setAttribute('src', blogImg4)
blogImage5.setAttribute('src', blogImg5)
blogImage6.setAttribute('src', blogImg6)

const workImg1 =document.getElementById('work-img1')
const workImg2 =document.getElementById('work-img2')
const workImg3 =document.getElementById('work-img3')
const workImg4 =document.getElementById('work-img4')

workImg1.setAttribute('src', work1)
workImg2.setAttribute('src', work2)
workImg3.setAttribute('src', work3)
workImg4.setAttribute('src', work4)

console.log('Magic Photography still working');
