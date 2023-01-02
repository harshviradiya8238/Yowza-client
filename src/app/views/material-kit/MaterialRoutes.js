import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const AppOnBoarding = Loadable(lazy(() => import('./onboarding/OnBoarding')));
const AppOnBoardingAgent = Loadable(lazy(() => import('./onboardingagent/OnBoardingAgent')));
const AppIcon = Loadable(lazy(() => import('./icons/AppIcon')));
const AppProgress = Loadable(lazy(() => import('./AppProgress')));
const AppMenu = Loadable(lazy(() => import('./menu/AppMenu')));
const AppCheckbox = Loadable(lazy(() => import('./checkbox/AppCheckbox')));
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')));
const AppRadio = Loadable(lazy(() => import('./radio/AppRadio')));
const AppSlider = Loadable(lazy(() => import('./slider/AppSlider')));
const AppDialog = Loadable(lazy(() => import('./dialog/AppDialog')));
const AppSnackbar = Loadable(lazy(() => import('./snackbar/AppSnackbar')));
const AppAgent = Loadable(lazy(() => import('./agent/Agent')));
const AppExpansionPanel = Loadable(lazy(() => import('./expansion-panel/AppExpansionPanel')));
const AppPasswordChange = Loadable(lazy(() => import('./changepassword/ChangePassword')));
const AppAddLender = Loadable(lazy(() => import('./addlender/AddLender')));
const AppGetAgent = Loadable(lazy(() => import('./getagent/GetAgent')));
const AppTermsofUse = Loadable(lazy(() => import('./termsofuse/TermsOfUse')));
const AppPrivacyProblem = Loadable(lazy(() => import('./privacypolicy/PrivacyPolicy')));
const AppAgentAgreement = Loadable(lazy(() => import('./agentagreement/AgentAgreement')));

const materialRoutes = [
  {
    path: '/lenders',
    element: <AppTable />,
  },
  {
    path: '/material/form',
    element: <AppForm />,
  },

  {
    path: '/material/icons',
    element: <AppIcon />,
  },
  {
    path: '/material/progress',
    element: <AppProgress />,
  },
  {
    path: '/material/menu',
    element: <AppMenu />,
  },
  {
    path: '/material/checkbox',
    element: <AppCheckbox />,
  },
  {
    path: '/material/switch',
    element: <AppSwitch />,
  },
  {
    path: '/material/radio',
    element: <AppRadio />,
  },
  {
    path: '/material/slider',
    element: <AppSlider />,
  },
  {
    path: '/material/agent',
    element: <AppAgent />,
  },
  {
    path: '/material/expansion-panel',
    element: <AppExpansionPanel />,
  },
  {
    path: '/material/dialog',
    element: <AppDialog />,
  },
  {
    path: '/material/snackbar',
    element: <AppSnackbar />,
  },
  {
    path: '/material/PasswordChange',
    element: <AppPasswordChange />,
  },
  {
    path: '/lenders/addlender',
    element: <AppAddLender />,
  },
  {
    path: '/material/agent/getagent',
    element: <AppGetAgent />,
  },
  {
    path: '/material/onboarding',
    element: <AppOnBoarding />,
  },
  {
    path: '/material/onboarding/onboardingagent',
    element: <AppOnBoardingAgent />,
  },
  {
    path: '/material/termsofuse',
    element: <AppTermsofUse />,
  },
  {
    path: '/material/privacypolicy',
    element: <AppPrivacyProblem />,
  },
  {
    path: '/material/agentagreement',
    element: <AppAgentAgreement />,
  },
];

export default materialRoutes;
