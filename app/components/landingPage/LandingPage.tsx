import { Button } from '../shadcn/ui/button';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-t from-gray-900 to-black text-white">
      <h1 className="text-5xl 2xl:text-9xl">Pilot Seat</h1>
      <h4 className="w-1/2 text-center text-xl">
        An advanced Dashboard / SaaS UI kit and design system for Figma. It can
        help you quickly build Dashboard, SaaS and other projects, and has a
        very good user experience.
      </h4>
      <div className="flex gap-4">
        <a href="/dashboard/customer">
          <Button>Dashboard Cust 1</Button>
        </a>
        <a href="/dashboard/customer1">
          <Button>Dashboard Cust 2</Button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
