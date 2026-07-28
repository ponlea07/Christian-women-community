export function formatRelativeDate(date: string): string {
  const saved = new Date(date);
  const now = new Date();

  const diffMs = now.getTime() - saved.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    return "Saved today";
  }

  if (days === 1) {
    return "Saved yesterday";
  }

  if (days < 7) {
    return `Saved ${days} days ago`;
  }

  const weeks = Math.floor(days / 7);

  if (weeks === 1) {
    return "Saved 1 week ago";
  }

  return `Saved ${weeks} weeks ago`;
}