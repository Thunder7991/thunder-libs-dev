<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!--
             [2,-1,50]  => 2 * _x + (-1) * _y + 50 =x
             [1,2,0] => 1 * _x + 2 * _y + 0 =y
             顶点坐标
             [0,0]  => [50,0]
             [100,0]  => [250,100]
             [100,50]  => [200,200]
             [0,50]  => [0,100]
             最后将四个点重新组合成一个新的矩形
              translate(10,10) 
                    rotate(30)
                    skewY(30) 
                    scale(1.5)
                    matrix(2 1 -1 2 50 0)
        -->
        <rect
          class="rect"
          x="0"
          y="0"
          width="100"
          height="50"
          fill="none"
          transform=""
          stroke="blue"
          stroke-width="5"
        ></rect>
      </svg>
    </div>
    <div class="container">
      <svg width="440" height="440" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#00a5e0"
          fill="transparent"
          transform="matrix(0,-1,1,0,0,440)"
        ></circle>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="grey" stroke-width="8"></rect>
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="blue"
          stroke-width="8"
          class="rect-process"
        ></rect>
      </svg>
    </div>
    <div class="container">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <path
          class="logo"
          d="M630.406488 5.607197a302.779994 302.779994 0 0 1 240.37002 242.364121l2.047996 12.719131a211.266924 211.266924 0 0 1 105.094515 280.252042 212.129238 212.129238 0 0 1-158.07293 120.88564 14.874916 14.874916 0 0 1-0.916209 2.91031l-40.313178 82.404879h120.88564c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940207 10.671135l-60.092505 126.00563a27.108996 27.108996 0 0 1-35.408767 14.066496 27.055101 27.055101 0 0 1-14.066497-35.408767l43.978013-88.171604H738.357418a27.108996 27.108996 0 0 1-27.16289-27.16289c0-3.880413 0.970103-7.275774 1.940206-10.671136l46.241587-98.896633H549.456763l-40.313178 82.404879h120.88564c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940206 10.671135l-81.111409 188.631182a27.108996 27.108996 0 0 1-35.462662 14.066497 27.055101 27.055101 0 0 1-14.012602-35.354873l64.996916-150.904946H468.884301a27.108996 27.108996 0 0 1-27.16289-27.108995c0-3.880413 0.970103-7.275774 1.940207-10.671136l46.241586-98.896633H279.983646l-40.313178 82.404879H360.556108c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940206 10.671135l-60.092505 126.00563a27.108996 27.108996 0 0 1-35.408768 14.066496 27.055101 27.055101 0 0 1-14.066497-35.408767l43.978013-88.171604H199.411184a27.108996 27.108996 0 0 1-27.16289-27.16289c0-3.880413 0.970103-7.275774 1.940207-10.671136l46.672744-99.705053A211.80587 211.80587 0 0 1 26.94839 453.255938a211.859765 211.859765 0 0 1 236.05845-210.189031l11.856817 1.616839C306.823169 80.844091 466.027886-26.244526 630.406488 5.607197zM539.378469 62.41213A242.202437 242.202437 0 0 0 334.417216 256.001617l-11.263976 58.044509-58.421772-9.91661A151.497786 151.497786 0 0 0 90.005099 427.97936a151.174419 151.174419 0 0 0 149.018634 176.343208H784.706794a151.336102 151.336102 0 0 0 151.65947-151.06663c0-59.230191-34.654243-113.017025-88.71055-137.592973l-30.342673-13.904813V301.812047l-4.527148-32.875721a242.364121 242.364121 0 0 0-273.35353-206.524196z m33.091298 88.548866a151.389997 151.389997 0 0 1 151.282208 141.904543l0.269473 9.162086a30.288778 30.288778 0 0 1-60.200294 4.958306l-0.377262-4.904411c0-47.427269-36.540555-86.393081-83.10551-90.327389l-7.868615-0.323368a30.288778 30.288778 0 0 1-4.850516-60.092505l4.850516-0.377262z"
          fill="#959BA6"
          p-id="2524"
        ></path>
      </svg>
    </div>
    <div class="container">
      <svg class="line-container" viewBox="0 0 400 400" width="400" height="400">
        <line class="line" x1="0" y1="50" x2="400" y2="50" fill="none" stroke-width="20" stroke="red"></line>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <circle cx="0" cy="0" r="30" stroke="black" stroke-width="1">
          <animate
            attributeName="cx"
            attributeType="XML"
            from="0"
            to="100"
            begin="0s"
            dur="1s"
            repeatCount="2"
            fill="freeze"
          ></animate>
          <animate
            attributeName="cy"
            attributeType="XML"
            from="0"
            to="100"
            begin="0s"
            dur="1s"
            repeatCount="2"
            fill="freeze"
          ></animate>
          <animate
            attributeName="fill"
            attributeType="XML"
            from="blue"
            to="red"
            begin="0s"
            dur="1s"
            repeatCount="2"
            fill="freeze"
          ></animate>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="2"
            begin="0s"
            dur="3s"
            repeatCount="2"
            fill="freeze"
          ></animateTransform>
        </circle>
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate
            attributeName="points"
            attributeType="XML"
            to="50 30 70 50 50 90 30 50"
            dur="5s"
            fill="freeze"
            repeatCount="1"
          />
        </polygon>
      </svg>
    </div>
    <!-- M Z:分别表示的是path的开始和结尾 
        Z:写上Z可以变为闭合状态-->
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            path="M 10 10 L 110 10 L 110 110 L 10 110 Z"
            dur="5s"
            rotate="0"
            fill="freeze"
            repeatCount="indefinite"
          ></animateMotion>
        </rect>
        <path id="motion-path" d="M 10 10 L 110 10 L 110 110 L 10 110 Z" fill="none" stroke="green" />
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            id="forward-rect"
            path="M 10 10 L 110 10 L 110 110 L 10 110"
            dur="5s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect.end + 0.5s"
          ></animateMotion>
          <animateMotion
            id="backward-rect"
            path="M 10 110 L 110 110 L 110 10 L 10 10"
            dur="5s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          ></animateMotion>
          <animate
            id="red-to-blue"
            attributeName="fill"
            attributeType="XML"
            from="red"
            to="blue"
            dur="2s"
            fill="freeze"
            begin="0; blue-to-red.end + 0.5s"
          ></animate>
          <animate
            id="blue-to-red"
            attributeName="fill"
            attributeType="XML"
            from="blue"
            to="red"
            dur="2s"
            fill="freeze"
            begin="red-to-blue.end + 0.5s"
          ></animate>
        </rect>
        <path id="motion-path" d="M 10 10 L 110 10 L 110 110 L 10 110 " fill="none" stroke="green" />
      </svg>
    </div>
    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
              attributeType="XML"
              attributeName="fill"
              from="red"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="0, 0"
          to="50, 50"
          begin="rect1.click"
          dur="2s"
          fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
            attributeType="XML"
            attributeName="fill"
            from="blue"
            to="green"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
    <div class="container">
      <!-- mask 蒙版 -->
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <rect x="5" y="5" width="390" height="390" fill="purple"></rect>
            <!-- 此时cirlcle 没有填充色,所以是透明的 -->
            <circle r="50" cx="50" cy="50"></circle>
          </mask>
          <!-- 渐变颜色 -->
          <linearGradient id="test-linear-gradient">
            <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="blue" stop-opacity="0"></stop>
          </linearGradient>
          <!-- 径向渐变 -->
          <radialGradient id="test-rafial-gradient" r="50%" cx="" cy="" fx="25%" fy="75%">
            <stop offset="0%" stop-color="white"></stop>
            <stop offset="10%" stop-color="yellow"></stop>
            <stop offset="95%" stop-color="red" stop-opacity="1"></stop>
          </radialGradient>
        </defs>
        <rect x="5" y="5" width="390" height="390" fill="url(#test-rafial-gradient)"></rect>
        <!-- <rect x="5" y="5" width="390" height="390" fill="blue" mask="url(#test-mask)"></rect> -->
      </svg>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: 'SvgAnimation',
  porps: {},
  setup(props, ctx) {
    onMounted(() => {
      const logo = document.getElementsByClassName('logo')[0];
      console.log(logo.getTotalLength());
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}

.rect {
  stroke-dasharray: 10 20;
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
@keyframes rect-process {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}
.rect-process {
  animation: rect-process 5s linear infinite;
}
.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 5s linear infinite;
}
@keyframes logo {
  0% {
    fill: white;
    stroke-dasharray: 8140;
    stroke-dashoffset: 8140;
  }
  50% {
    fill: white;
    stroke-dasharray: 8140;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: white;
  }
  100% {
    fill: blue;
    stroke: white;
  }
}
.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s ease-out;
}
.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}
</style>
