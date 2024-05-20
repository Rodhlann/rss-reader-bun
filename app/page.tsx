import { FilterSelector } from "@/src/components/filterSelector";

export default function Home() {
  return (
    <div className="content-wrapper">
    <h1>My Cool RSS Feeds</h1>
    <a href="/admin">Admin Login</a>

    <h2>This Week's Feeds</h2>
    <FilterSelector />
    <div id="feeds-wrapper">
      <div className="feeds-loading">Loading...</div>
    </div>
  </div>
  );
}
