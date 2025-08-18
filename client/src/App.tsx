import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Alumni from "./components/Alumni";
import AlumniRegistration from "./components/AlumniRegistration";
import ComplaintsRegistration from "./components/ComplaintsRegistration";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Recogniation from "./pages/Recogniation";
import AnnualReport from "./pages/AnnualReport";
import AnnualAccount from "./pages/AnnualAccount";
import SponseringBody from "./pages/SponseringBody";
import AdviseryBoard from "./pages/AdviseryBoard";
import AppliedScience from "./pages/AppliedScience";
import AI from "./pages/AI";
import ComputerScience from "./pages/ComputerScience";
import IOT from "./pages/IOT";
import Collbration from "./pages/Collbration";
import CalendarPage from "./pages/Calendar";
import DirecrorMessage from "./pages/DirecrorMessage";
import Registrar from "./pages/Registrar";
import CoE from "./pages/CoE";
import Council from "./pages/Council";
import Complaints from "./pages/Complaints";
import Team from "./pages/Team";
import Cells from "./pages/Cells";
import ManagementTeam from "./pages/ManagementTeam";
import Organogram from "./pages/Organogram";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Conferences from "./pages/Conferences";
import Funding from "./pages/Funding";
import IPRList from "./pages/IPRList";
import pbic from "./pages/pbic";
import SportsFacilities from "./pages/SportsFacilities";
import HostelFacilities from "./pages/HostelFacilities";
import PlacementPage from "./pages/PlacementPage";
import Grievances from "./pages/Grevience";
import ICCPage from "./pages/ICCPage";
import ICC from "./pages/ICC";
import Interaction from "./pages/Interaction";
import LiteracyForm from "./pages/LiteracyForm";
import LiteracyForum from "./pages/LiteracyForum";
import AcmChapter from "./pages/AcmChapter";
import AnnualEventsPage from "./pages/AnnualEvents";
import GoverningCouncil from "./pages/GoverningCouncil";
import NbaPage from "./pages/Nba";
import OBEPage from "./pages/OBE";
import NEPPage from "./pages/NEPPage";
import NaacFirstCycle from "./pages/Naac";
import NirfPage from "./pages/Nirf";
import QivRankingPage from "./pages/Qiv";
import TimesRankingPage from "./pages/TimesRanking";
import ELibrary from "./pages/ELibrary";
import OBE from "./pages/OBE";
import EventPage from "./pages/IPR-active";
import IQACPage from "./pages/IQAC";
import HostelLife from "./pages/HostelLife";
import ErrorBoundary from "./components/ErrorBoundary";
import IETEPage from "./pages/IETEPage";
import IEEEPage from "./pages/IEEEPage";
import ISTEPage from "./pages/ISTEPage";
import IdealLab from "./pages/IdealLab";
import PIETISTE from "./pages/PIETISTE";
import NSS from "./pages/NSS";
import Health from "./pages/Health";
import Disables from "./pages/Disables";
import Facilties from "./pages/Facilties";
import Publications from "./pages/Publications";
import IIC from "./pages/IIC";
import MissionVision from "./components/MissionVision";
import Messages from "./pages/Messages";
import AdmissionFees from "./pages/AdmissionFees";
import IPRCell from './pages/IPRCell';
import IndustryInstituteInnovation from './pages/IndustryInstituteInnovation';
import QSGaugePage from "./pages/QSGauge";
import Qiv from "./pages/Qiv";
import TimesRanking from "./pages/TimesRanking";
import AISHEPage from "./pages/AISHE";
import ISOCertificatePage from "./pages/ISOCertificate";
import ElectoralLiteracyForum from "./pages/ElectoralLiteracyForum";
import Hackathons from "./pages/Hackathons";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/alumni" component={Alumni} />
        <Route path="/alumni-registration" component={AlumniRegistration} />
        <Route
          path="/complaints-registration"
          component={ComplaintsRegistration}
        />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/recognization" component={Recogniation} />
        <Route path="/annual-reports" component={AnnualReport} />
        <Route path="/annual-accounts" component={AnnualAccount} />
        <Route path="/sponsering-body" component={SponseringBody} />
        <Route path="/advisery-board" component={AdviseryBoard} />
        <Route path="/applied-sceince" component={AppliedScience} />
        <Route path="/artificial-intelligence" component={AI} />
        <Route path="/computer-science" component={ComputerScience} />
        <Route path="/dep-iot" component={IOT} />
        <Route path="/collbration" component={Collbration} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/director-message" component={DirecrorMessage} />
        <Route path="/registar-message" component={Registrar} />
        <Route path="/coe-message" component={CoE} />
        <Route path="/governing-council" component={GoverningCouncil} />
        <Route path="/complaints" component={Complaints} />
        <Route path="/messages" component={Messages} />
        <Route
          path="/complaints-registration"
          component={ComplaintsRegistration}
        />
        <Route path="/team-management" component={Team} />
        <Route path="/cells-committees" component={Cells} />
        <Route path="/management-team" component={ManagementTeam} />
        <Route path="/organogram" component={Organogram} />
        <Route path="/rules-regulation" component={RulesAndRegulations} />
        <Route
          path="/research-development"
          component={ResearchAndDevelopment}
        />
        <Route path="/conferences" component={Conferences} />
        <Route path="/funding" component={Funding} />
        <Route path="/iprs" component={IPRList} />
        <Route path="/ipr-cell" component={IPRCell} />
        <Route path="/industry-institute-innovation" component={IndustryInstituteInnovation} />
        <Route path="/pbic" component={pbic} />
        <Route path="/sports" component={SportsFacilities} />
        <Route path="/hostel-facilties" component={HostelFacilities} />
        <Route path="/placements" component={PlacementPage} />
        <Route path="/greviance" component={Grievances} />
        <Route path="/icc" component={ICC} />
        <Route path="/iic" component={IIC} />
        <Route path="/interaction" component={Interaction} />
        <Route path="/icc-old" component={ICCPage} />
        <Route path="/ideal-lab" component={IdealLab} />
        <Route path="/pietiste" component={PIETISTE} />
        <Route path="/iee" component={IEEEPage} />
        <Route path="/iete" component={IETEPage} />
        <Route path="/nss" component={NSS} />
        <Route path="/health" component={Health} />
        <Route path="/disable" component={Disables} />
        <Route path="/facilties" component={Facilties} />
        <Route path="/hackathons" component={Hackathons} />
        <Route path="/publications" component={Publications} />
        <Route path="/literacy-forum" component={LiteracyForum} />
        <Route path="/acm" component={AcmChapter} />
        <Route path="/annual-events" component={AnnualEventsPage} />
        <Route path="/annual-report" component={AnnualReport} />
        <Route path="/annual-account" component={AnnualAccount} />
        <Route path="/governing-concil" component={GoverningCouncil} />
        <Route path="/nep" component={NEPPage} />
        <Route path="/naac" component={NaacFirstCycle} />
        <Route path="/nirf" component={NirfPage} />
        <Route path="/qiv-ranking" component={QivRankingPage} />
        <Route path="/times-ranking" component={TimesRankingPage} />
        <Route path="/e-library" component={ELibrary} />
        <Route path="/nba" component={NbaPage} />
        <Route path="/obe" component={OBE} />
        <Route path="/literacy-form" component={LiteracyForm} />
        <Route path="/iqac" component={IQACPage} />
        <Route path="/ipr-active" component={EventPage} />
        <Route path="/hostel-life" component={HostelLife} />
        <Route path="/iste" component={ISTEPage} />
        <Route path="/mission-vision" component={MissionVision} />
        <Route path="/admission-fees" component={AdmissionFees} />
        <Route path="/qs-gauge" component={QSGaugePage} />
        <Route path="/qiv-ranking" component={Qiv} />
        <Route path="/times-ranking" component={TimesRanking} />
        <Route path="/aishe" component={AISHEPage} />
        <Route path="/iso-certificate" component={ISOCertificatePage} />
        <Route path="/electoral-literacy-forum" component={ElectoralLiteracyForum} />
        <Route path="/projects" component={() => <div className="min-h-screen bg-neutral-50 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-primary mb-4">Projects</h1><p className="text-neutral-600">Projects page is under development</p></div></div>} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;