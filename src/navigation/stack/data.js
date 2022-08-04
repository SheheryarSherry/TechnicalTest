import {GREATDESIGN, HOME} from '../../constants/navigation';
import GreatDesign from '../../screens/greatdesign';
import Home from '../../screens/home';

// replace the components with you desired screens or you can add more screens dynamically
export const authScreens = [
  {
    id: 1,
    name: HOME,
    component: Home,
  },
  {
    id: 2,
    name: GREATDESIGN,
    component: GreatDesign,
  },
];
