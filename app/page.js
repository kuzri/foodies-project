import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <div style={{textAlign:'center'}}>
        <h1><Link href='meals'>meals</Link></h1>
        <h1><Link href='meals/share'>share</Link></h1>
        <h1><Link href='community'>comumnity</Link></h1>
        </div>
    </main>
  );
}
