import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Heading } from 'components';

function Logo(props) {

  const { title, size, division } = props;

  const styles = StyleSheet.create({
    logo: {
      position: 'relative',
      display:'inline-block',
      width: '100%',
    },
    division: {
      position: 'absolute',
      top: 40,
      left: 65,
      display: 'inline-block',
      width: '100%',
    },
    svg: {
      width: size,
      height: 'auto',
      display: 'inline-block',
      overflow: 'visible',
    },
  });

  return (
    <div className={css(styles.logo)}>
      <svg title={title} className={css(styles.svg)} width="130px" height="63px" viewBox="0 0 130 63" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="-80.98125%" cy="131.48595%" fx="-80.98125%" fy="131.48595%" r="370.908333%" gradientTransform="translate(-0.809812,1.314860),scale(1.000000,0.398517),translate(0.809812,-1.314860)" id="radialGradient-1">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="121.991971%" cy="115.630986%" fx="121.991971%" fy="115.630986%" r="129.953285%" gradientTransform="translate(1.219920,1.156310),scale(0.515878,1.000000),translate(-1.219920,-1.156310)" id="radialGradient-2">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="-25.526087%" cy="136.229231%" fx="-25.526087%" fy="136.229231%" r="774.069565%" gradientTransform="translate(-0.255261,1.362292),scale(1.000000,0.177736),translate(0.255261,-1.362292)" id="radialGradient-3">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="-60.3981087%" cy="43.9043478%" fx="-60.3981087%" fy="43.9043478%" r="168.355556%" gradientTransform="translate(-0.603981,0.439043),scale(0.217127,1.000000),translate(0.603981,-0.439043)" id="radialGradient-4">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="88.3542373%" cy="136.229231%" fx="88.3542373%" fy="136.229231%" r="301.755932%" gradientTransform="translate(0.883542,1.362292),scale(1.000000,0.455931),translate(-0.883542,-1.362292)" id="radialGradient-5">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="-61.871%" cy="115.163333%" fx="-61.871%" fy="115.163333%" r="178.036%" gradientTransform="translate(-0.618710,1.151633),scale(0.597256,1.000000),translate(0.618710,-1.151633)" id="radialGradient-6">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="110.775532%" cy="132.6%" fx="110.775532%" fy="132.6%" r="189.4%" gradientTransform="translate(1.107755,1.326000),scale(1.000000,0.767739),translate(-1.107755,-1.326000)" id="radialGradient-7">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="-64.83875%" cy="125.874227%" fx="-64.83875%" fy="125.874227%" r="222.545%" gradientTransform="translate(-0.648388,1.258742),scale(1.000000,0.828532),translate(0.648388,-1.258742)" id="radialGradient-8">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
          <radialGradient cx="117.7032%" cy="129.391919%" fx="117.7032%" fy="129.391919%" r="142.4288%" gradientTransform="translate(1.177032,1.293919),scale(0.788378,1.000000),translate(-1.177032,-1.293919)" id="radialGradient-9">
              <stop stopColor="#FFFFFF" offset="0%"></stop>
              <stop stopColor="#FFFFFF" offset="25%"></stop>
              <stop stopColor="#FAFCFD" offset="33.4%"></stop>
              <stop stopColor="#ECF2F8" offset="43.13%"></stop>
              <stop stopColor="#D5E2EE" offset="53.54%"></stop>
              <stop stopColor="#B4CCE1" offset="64.42%"></stop>
              <stop stopColor="#8AAFD1" offset="75.66%"></stop>
              <stop stopColor="#578CBC" offset="87.21%"></stop>
              <stop stopColor="#1C63A5" offset="98.81%"></stop>
              <stop stopColor="#155FA2" offset="100%"></stop>
          </radialGradient>
        </defs>
        <g id="group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="text" fill="#FFFFFF">
                <path d="M29.7631579,0 C12.6578947,0 0,11.5783784 0,30.4783784 C0,48.1864865 14.5394737,62.8297297 32.5,62.6594595 C48.0657895,62.4891892 62.4342105,51.7621622 62.0921053,32.0108108 C61.9210526,17.027027 47.3815789,0 29.7631579,0 Z" id="Shape"></path>
                { !division &&
                  <g id="DA" transform="translate(67.000000, 19.000000)">
                    <path d="M51.8815789,2.62432432 C51.3684211,1.43243243 49.6578947,0.581081081 47.6052632,0.581081081 C45.5526316,0.581081081 43.8421053,1.43243243 42.9868421,2.45405405 L27.5921053,23.9081081 L31.6973684,23.9081081 L36.1447368,17.6081081 L51.1973684,17.6081081 L54.2763158,23.9081081 L62.1447368,23.9081081 L51.8815789,2.62432432 Z M38.0263158,15.2243243 L45.0394737,5.34864865 L50,15.2243243 L38.0263158,15.2243243 Z" id="Shape"></path>
                    <path d="M31.8684211,12.3297297 C32.5526316,5.85945946 25.7105263,0.581081081 16.6447368,0.581081081 L2.61842105,0.581081081 L0.0526315789,23.9081081 L11.8552632,23.9081081 L14.0789474,23.9081081 C23.1447368,24.0783784 31.1842105,18.8 31.8684211,12.3297297 Z M23.8289474,12.3297297 C23.3157895,17.4378378 19.0394737,21.5243243 14.0789474,21.5243243 L7.75,21.5243243 L9.80263158,3.30540541 L14.4210526,3.30540541 L16.1315789,3.30540541 C20.9210526,3.30540541 24.3421053,7.39189189 23.8289474,12.3297297 Z" id="Shape"></path>
                  </g>
                }
                { division &&
                  <g id="DA-Provincial" transform="translate(67.000000, 11.000000)">
                      <path d="M52.2894737,2.04324324 C51.7763158,0.851351351 50.0657895,0 48.0131579,0 C45.9605263,0 44.25,0.851351351 43.3947368,1.87297297 L28,23.327027 L32.1052632,23.327027 L36.5526316,17.027027 L51.6052632,17.027027 L54.6842105,23.327027 L62.5526316,23.327027 L52.2894737,2.04324324 Z M38.4342105,14.6432432 L45.4473684,4.76756757 L50.4078947,14.6432432 L38.4342105,14.6432432 Z" id="Shape"></path>
                      <path d="M31.8157895,11.7486486 C32.5,5.27837838 25.6578947,-7.10542736e-15 16.5921053,-7.10542736e-15 L2.56578947,-7.10542736e-15 L0,23.327027 L11.8026316,23.327027 L14.0263158,23.327027 C23.0921053,23.4972973 31.1315789,18.2189189 31.8157895,11.7486486 Z M23.7763158,11.7486486 C23.2631579,16.8567568 18.9868421,20.9432432 14.0263158,20.9432432 L7.69736842,20.9432432 L9.75,2.72432432 L14.3684211,2.72432432 L16.0789474,2.72432432 C20.8684211,2.72432432 24.2894737,6.81081081 23.7763158,11.7486486 Z" id="Shape"></path>
                  </g>
                }
                { division &&
                  <g id="DA-Provincial" transform="translate(65.000000, 56.000000)">
                  <Heading
                    level={"text"}
                    weight={"bold"}
                    tracking={"base"}
                    size={"small"}
                    color={"white"}
                    override={{fontStyle: 'italic'}}
                    uppercase
                  >
                    {division}
                  </Heading>
                  </g>
                }
            </g>

            <path d="M32.3289474,60.7864865 C26.6842105,60.7864865 21.3815789,59.4243243 16.7631579,56.7 C23.6052632,51.2513514 49.2631579,52.7837838 55.5921053,48.8675676 C50.4605263,56.5297297 41.7368421,60.6162162 32.3289474,60.7864865 L32.3289474,60.7864865 Z" id="Shape" fill="#155FA2"></path>
            <path d="M27.7105263,57.3810811 C34.2105263,57.3810811 40.1973684,55.1675676 44.8157895,51.4216216 C35.75,52.4432432 24.1184211,52.9540541 18.4736842,55.6783784 C21.3815789,56.7 24.4605263,57.3810811 27.7105263,57.3810811 Z" id="Shape" fill="#1E80C0"></path>
            <path d="M57.9868421,44.6108108 C52.5131579,52.1027027 27.0263158,46.1432432 14.0263158,54.827027 C13.3421053,54.3162162 12.6578947,53.6351351 11.9736842,53.1243243 C10.0921053,51.4216216 8.55263158,49.7189189 7.18421053,47.6756757 C7.52631579,47.5054054 7.69736842,47.3351351 8.03947368,47.1648649 C18.8157895,42.7378378 37.8026316,43.5891892 57.9868421,44.6108108" id="Shape" fill="#902519"></path>
            <path d="M7.86842105,47.1648649 C7.69736842,47.3351351 7.35526316,47.3351351 7.18421053,47.5054054 C9.40789474,50.2297297 12.1447368,52.4432432 15.0526316,54.1459459 C23.9473684,49.0378378 37.9736842,49.8891892 47.7236842,48.6972973 C48.9210526,47.3351351 49.9473684,45.972973 50.9736842,44.2702703 C44.9868421,43.9297297 39,43.7594595 33.5263158,43.7594595 C23.0921053,43.7594595 14.1973684,44.6108108 7.86842105,47.1648649 Z" id="Shape" fill="#B0153C"></path>
            <path d="M59.0131579,42.227027 C47.3815789,43.0783784 25.8289474,31.3297297 2.05263158,34.3945946 C1.71052632,32.5216216 1.71052632,29.9675676 1.71052632,28.2648649 C29.5921053,30.4783784 28.9078947,36.4378378 60.0394737,37.6297297 C59.8684211,38.9918919 59.3552632,41.2054054 59.0131579,42.227027" id="Shape" fill="#1C8654"></path>
            <path d="M37.6315789,38.1405405 C43.1052632,39.5027027 48.0657895,41.0351351 52.3421053,41.7162162 C53.0263158,40.3540541 53.5394737,38.8216216 53.8815789,37.2891892 C28.9078947,35.5864865 27.7105263,30.3081081 1.88157895,28.2648649 C1.71052632,29.9675676 1.88157895,32.5216216 2.05263158,34.3945946 C14.8815789,32.8621622 27.1973684,35.4162162 37.6315789,38.1405405 Z" id="Shape" fill="#59A550"></path>
            <path d="M41.0526316,41.5459459 C25.8289474,40.3540541 12.1447368,41.8864865 5.47368421,45.1216216 L5.47368421,45.1216216 C4.78947368,43.7594595 4.10526316,42.3972973 3.59210526,40.8648649 C3.42105263,40.0135135 3.25,39.1621622 2.73684211,37.9702703 C2.56578947,37.6297297 2.56578947,37.2891892 2.56578947,36.9486486 C16.25,34.3945946 29.5921053,38.4810811 41.0526316,41.5459459" id="Shape" fill="#FDC842"></path>
            <path d="M42.5921053,5.10810811 L37.9736842,25.2 C38.1447368,25.3702703 38.4868421,25.5405405 38.6578947,25.7108108 L46.1842105,7.32162162 C44.9868421,6.47027027 43.7894737,5.61891892 42.5921053,5.10810811 Z" id="Shape" fill="url(#radialGradient-1)"></path>
            <path d="M2.73684211,22.6459459 C6.5,23.8378378 20.5263158,28.4351351 26,30.3081081 C26,29.9675676 26.1710526,29.627027 26.1710526,29.2864865 C20.0131579,26.2216216 7.18421053,19.7513514 4.10526316,18.2189189 C3.42105263,19.7513514 3.07894737,21.1135135 2.73684211,22.6459459 Z" id="Shape" fill="url(#radialGradient-2)"></path>
            <path d="M34.7236842,24.0081081 C35.0657895,24.0081081 35.2368421,24.1783784 35.5789474,24.1783784 L36.2631579,2.72432432 C34.8947368,2.38378378 33.6973684,2.21351351 32.3289474,2.04324324 L34.7236842,24.0081081 Z" id="Shape" fill="url(#radialGradient-3)"></path>
            <path d="M60.2105263,30.4783784 L42.25,32.8621622 L42.25,33.5432432 L60.2105263,34.3945946 C60.2105263,33.5432432 60.3815789,30.9891892 60.2105263,30.4783784 Z" id="Shape" fill="url(#radialGradient-4)"></path>
            <path d="M22.4078947,2.72432432 L31.6447368,24.1783784 C31.9868421,24.1783784 32.1578947,24.0081081 32.5,24.0081081 L26.1710526,2.04324324 C24.9736842,2.21351351 23.6052632,2.38378378 22.4078947,2.72432432 Z" id="Shape" fill="url(#radialGradient-5)"></path>
            <path d="M57.4736842,20.4324324 L41.9078947,29.9675676 C42.0789474,30.1378378 42.0789474,30.4783784 42.0789474,30.6486486 L59.0131579,24.1783784 C58.5,22.9864865 57.9868421,21.6243243 57.4736842,20.4324324 Z" id="Shape" fill="url(#radialGradient-6)"></path>
            <path d="M13.5131579,6.47027027 L28.9078947,25.3702703 C29.0789474,25.2 29.4210526,25.0297297 29.5921053,24.8594595 L16.9342105,4.42702703 C15.7368421,5.10810811 14.5394737,5.78918919 13.5131579,6.47027027 Z" id="Shape" fill="url(#radialGradient-7)"></path>
            <path d="M50.9736842,11.4081081 L40.1973684,27.2432432 C40.3684211,27.4135135 40.5394737,27.7540541 40.7105263,27.9243243 L53.8815789,14.6432432 C52.8552632,13.4513514 52,12.2594595 50.9736842,11.4081081 Z" id="Shape" fill="url(#radialGradient-8)"></path>
            <path d="M6.15789474,13.9621622 C10.4342105,16.8567568 23.4342105,25.0297297 27.0263158,27.2432432 C27.1973684,27.072973 27.3684211,26.7324324 27.5394737,26.5621622 C24.2894737,23.6675676 12.6578947,13.6216216 8.89473684,10.3864865 C7.86842105,11.4081081 7.01315789,12.7702703 6.15789474,13.9621622 Z" id="Shape" fill="url(#radialGradient-9)"></path>
        </g>
      </svg>

    </div>
  )
}

Logo.defaultProps = {
  title: 'Democratic Alliance Logo',
  size: '130px',
  division: null,
}

Logo.propTypes = {
  /*Title of the logo*/
  title: PropTypes.string,
  /*Child Title of the logo*/
  division: PropTypes.string,
  /*Pixel value of logo width*/
  size: PropTypes.string.isRequired,
}

export default Logo;
