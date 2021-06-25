import Text from './components/Text/index';
import Text2 from './components/Text2/index';
import Text3 from './components/Text3/index';
import SvgIcon from './components/Icon/index';
import SvgAnimation from './components/svgAnimation/index';
import ThunderLoading from './components/ThunderLoading/index';
import ThunderFlyBox from './components/ThunderFlyBox/index';
import Container from './components/Container/index';
import ThunderLogo from './components/ThunderLogo/index';
import VueCountTo from './components/VueCountTo/index';
import VueEcharts  from './components/VueEcharts';
import BaseScrollList  from './components/BaseScrollList/index';


export default function (Vue) {
  Vue.use(Text);
  Vue.use(Text2);
  Vue.use(Text3);
  Vue.use(SvgIcon);
  Vue.use(SvgAnimation);
  Vue.use(ThunderLoading);
  Vue.use(ThunderFlyBox);
  Vue.use(Container);
  Vue.use(ThunderLogo);
  Vue.use(VueCountTo);
  Vue.use(VueEcharts);  
  Vue.use(BaseScrollList);  
}
