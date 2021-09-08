import SideBar from './components/SideBar'
import Preview from './components/Preview'
import MainBar from './components/MainBar'
import GroupBox from './components/GroupBox'
import EmojiBox from './components/EmojiBox'
import Emoji from './components/Emoji'

import { emojis } from './emojis'

import './styles/main.scss'
import { useState } from 'react'

const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 4,
  encoderOptions: 1,
}

function App() {

  const [head, setHead] = useState(null)
  const [eyes, setEyes] = useState(null)
  const [mouth, setMouth] = useState(null)
  const [moustache, setMoustache] = useState(null)
  const [other, setOther] = useState(null)
  const [eyebrows, setEyebrows] = useState(null)

  function saveSvg(svgEl, name) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

  const handleClick = (category, emoji) => {
   switch (category) {
    case 'head':
      return setHead(emoji)
    case 'eyes':
      return setEyes(emoji)
    case 'mouth':
      return setMouth(emoji)
    case 'moustache':
      return setMoustache(emoji)
    case 'other':
      return setOther(emoji)
    case 'eyebrows':
      return setEyebrows(emoji)
      
     default:
       return null
   }
  }

 

  return (
    <div className="App">
      <SideBar>        
        {
          Object.keys(emojis).map((category, index) => {
            return(
              <GroupBox id={index} name={category}>
                {
                  emojis[category].map((item) => {
                    return(
                      <EmojiBox><Emoji id={index.toString() + item.id.toString()} shapes={[item]} onClick={() => handleClick(category, item)} /></EmojiBox>
                    )
                  })
                }
              </GroupBox>
            )
          })
        }        
      </SideBar>
      <Preview>
        <Emoji shapes={[head, eyes, eyebrows, mouth, moustache, other]} id="emoji-svg"/>
      </Preview>
      <MainBar>
        <p>Save as</p>
        <div>
          <button onClick={() => saveSvgAsPng.saveSvgAsPng(document.getElementById('emoji-svg'), 'emoji.png', imageOptions)}>PNG</button>
          <button onClick={() => saveSvg(document.getElementById("emoji-svg"), 'emoji.svg')}>SVG</button>
        </div>
      </MainBar>
    </div>
  );
}

export default App;
