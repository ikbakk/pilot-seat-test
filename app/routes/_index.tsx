import type { MetaFunction } from '@remix-run/node';
import LandingPage from '~/components/landingPage/LandingPage';
import LandingPageNavbar from '~/components/landingPage/Navbar/Navbar';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="">
      <LandingPageNavbar />
      <LandingPage />
    </div>
  );
}
