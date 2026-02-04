export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs text-neutral-400">
          Built with{' '}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors underline"
          >
            Claude
          </a>
        </p>
      </div>
    </footer>
  );
}
