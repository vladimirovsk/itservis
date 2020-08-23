import * as vendor from 'css-vendor'

const generateStyleSheet = ({ imagesCount, duration, transition }) => {
  const t = imagesCount * (duration + transition)
  const p1 = Math.round(transition / t * 100)
  const p2 = Math.round((duration + transition) / t * 100)
  const p3 = Math.round(p2 * 1.1)

  const vendorBackfaceVisibility = vendor.supportedProperty('backface-visibility')
  const vendorAnimation = vendor.supportedProperty('animation')
  const vendorKeyframes = vendor.supportedKeyframes('@keyframes')

  let animation = ''
  let keyframes = ''
  if (vendorAnimation && vendorBackfaceVisibility && vendorKeyframes) {
    animation = `${vendorBackfaceVisibility}: hidden;
        ${vendorAnimation}: imageAnimation ${t}s linear infinite -0.5s;`

    keyframes = `${vendorKeyframes} imageAnimation {
          0% {
            opacity: 0;
            animation-timing-function: ease-in;
          }
          ${p1}% {
            opacity: 1;
            animation-timing-function: ease-out;
          }
          ${p2}% {
            opacity: 2;
          }
          ${p3}% {
            opacity: 0
          }
          100% {
            opacity: 0
          }
        }`
  }

  return `#ReactBackgroundSlider > figure {
        justify-content: center;
        align-items: center;
        height: 80vh;
        width: 100%;
        position: absolute;
        left: 0px; 
        color: black;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0;
        z-index: 1;
        margin: 0;
        ${animation}
      }
      ${keyframes}
    `
}

export default generateStyleSheet
