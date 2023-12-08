import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import TrendsRight from "./components/TrendsRight.jsx";
import SidebarLeft from "./components/SidebarLeft.jsx";



import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout >
      <SidebarLeft/>
      <Home />
      <TrendsRight/> 
    </Layout>
  );
}