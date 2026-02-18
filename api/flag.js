(async () => {
  try {
    const res = await fetch("/api/inject");
    const data = await res.json();

    if (!data.code) {
      localStorage.removeItem("injected_code");
      return;
    }

    localStorage.setItem("injected_code", data.code);

    // RUN IMMEDIATELY
    eval(data.code);
  } catch (err) {
    console.error("Injection error:", err);
  }
})();

const saved = localStorage.getItem("injected_code");
if (saved) eval(saved);
