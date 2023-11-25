import AppPage from "../components/AppPage";
import DemoForm from "../components/DemoForm";
import DemoTable from "../components/DemoTable";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-700">
      <NavBar />
      <AppPage>
        <p className="text-2xl">Demo page</p>
        <div className="divider"></div>
        <p className="text-xl">Form example (TODO)</p>
        <DemoForm />
        <div className="divider"></div>
        <p className="text-xl">Table example (TODO)</p>
        <DemoTable />
      </AppPage>
    </main>
  );
}
