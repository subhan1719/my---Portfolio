import { useEffect, useState } from "react";

export function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length] ?? "";
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden className="glow-text">{text}</span>
      <span aria-hidden className="ml-0.5 inline-block w-[2px] animate-pulse bg-primary align-middle" style={{ height: "1em" }} />
    </span>
  );
}
