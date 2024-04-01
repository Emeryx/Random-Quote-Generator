
import randomColor from './RandomColorGenerator';

const setColors = () => {
    const color = randomColor()
    document.getElementById('text')!.style.color = color;
    document.getElementById('root')!.style.backgroundColor = color;
    document.getElementById('quote-icon')!.style.color = color;
    document.getElementById('author')!.style.color = color;
    document.getElementById('tweet-quote')!.style.backgroundColor = color;
    document.getElementById('tumblr-icon')!.style.backgroundColor = color;
    document.getElementById('new-quote')!.style.backgroundColor = color;
}

export default setColors;