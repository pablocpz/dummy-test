import CriminalsList from './components/CriminalsList';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Criminals</h1>
      <CriminalsList />
    </main>
  );
}
