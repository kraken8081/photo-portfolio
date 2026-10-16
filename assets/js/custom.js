/* Home album cards: staggered reveal (motion polish; respects reduced-motion) */
(function () {
  const cards = document.querySelectorAll("section.galleries > .card");
  if (!cards.length) return;

  const reduce =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !document.documentElement.classList.contains("has-motion-js")) {
    cards.forEach((card) => card.classList.add("is-revealed"));
    return;
  }

  const STAGGER_MS = 85;

  const reveal = (card, index) => {
    card.style.transitionDelay = index * STAGGER_MS + "ms";
    card.classList.add("is-revealed");
    const clearDelay = (event) => {
      if (event.target !== card) return;
      if (event.propertyName !== "opacity" && event.propertyName !== "transform") return;
      card.style.transitionDelay = "";
      card.removeEventListener("transitionend", clearDelay);
    };
    card.addEventListener("transitionend", clearDelay);
  };

  if (typeof IntersectionObserver !== "function") {
    cards.forEach((card, i) => reveal(card, i));
    return;
  }

  let batchIndex = 0;
  const io = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => {
          const ai = Array.prototype.indexOf.call(cards, a.target);
          const bi = Array.prototype.indexOf.call(cards, b.target);
          return ai - bi;
        })
        .forEach((entry) => {
          io.unobserve(entry.target);
          reveal(entry.target, batchIndex++);
        });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  cards.forEach((card) => io.observe(card));
})();
