// ====== CONFIG ======
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1465746218729603176/J51mUaC1lmsHgd78Hk9cKqYAnWWeFgsvfrUxXgJJUvt1bHZbqx_DHULME8RuYoIzOBG8";

/**
 * Rotazione menù: 4 settimane.
 * Per ogni giorno: 3 alternative "al posto del primo" + 2 alternative di secondo.
 * (Niente colazione, niente pasta al burro.)
 */
const MENU = {
  1: { // Settimana 1
    lun: {
      primi: ["Pasta al pomodoro", "Minestra di verdure", "Antipasto misto (affettati + formaggio)"],
      secondi: ["Cotoletta + patate", "Omelette + insalata"]
    },
    mar: {
      primi: ["Pasta al pesto", "Riso al pomodoro", "Zuppa di legumi"],
      secondi: ["Pollo arrosto + zucchine", "Hamburger + verdure"]
    },
    mer: {
      primi: ["Pasta tonno e pomodoro", "Minestra di riso", "Bruschette miste"],
      secondi: ["Polpette + purè", "Frittata + insalata"]
    },
    gio: {
      primi: ["Risotto allo zafferano", "Pasta al pomodoro", "Vellutata di carote"],
      secondi: ["Tacchino + insalata", "Formaggi misti + verdure"]
    },
    ven: {
      primi: ["Pasta al salmone", "Minestrone", "Insalata di riso"],
      secondi: ["Filetto di pesce + spinaci", "Uova strapazzate + contorno"]
    },
    sab: {
      primi: ["Lasagne", "Pasta al ragù", "Antipasto rustico"],
      secondi: ["Arrosto + patate", "Hamburger + insalata"]
    },
    dom: {
      primi: ["Tagliatelle al ragù", "Gnocchi al pomodoro", "Risotto"],
      secondi: ["Roast beef + verdure", "Scaloppine + patate"]
    }
  },
  2: { // Settimana 2
    lun: {
      primi: ["Pasta panna e prosciutto", "Minestra", "Antipasto misto"],
      secondi: ["Omelette + insalata", "Hamburger + patatine"]
    },
    mar: {
      primi: ["Riso al pomodoro", "Pasta al pesto", "Zuppa di lenticchie"],
      secondi: ["Polpette + purè", "Pollo + zucchine"]
    },
    mer: {
      primi: ["Pasta al ragù", "Minestrone", "Insalata di riso"],
      secondi: ["Cotoletta + patate", "Frittata + verdure"]
    },
    gio: {
      primi: ["Pasta ricotta e spinaci", "Vellutata", "Bruschette"],
      secondi: ["Hamburger + insalata", "Formaggi + contorno"]
    },
    ven: {
      primi: ["Pasta al tonno", "Minestra", "Antipasto freddo"],
      secondi: ["Pesce al forno + fagiolini", "Uova + verdure"]
    },
    sab: {
      primi: ["Cannelloni", "Pasta al ragù", "Risotto"],
      secondi: ["Arrosto + patate", "Pollo + insalata"]
    },
    dom: {
      primi: ["Gnocchi", "Tagliatelle", "Minestra"],
      secondi: ["Scaloppine + patate", "Roast beef + verdure"]
    }
  },
  3: { // Settimana 3
    lun: {
      primi: ["Pasta al pesto", "Minestra", "Antipasto"],
      secondi: ["Cotoletta + patate", "Omelette + insalata"]
    },
    mar: {
      primi: ["Risotto ai funghi", "Pasta al pomodoro", "Vellutata"],
      secondi: ["Pollo + verdure", "Hamburger + contorno"]
    },
    mer: {
      primi: ["Pasta al ragù", "Minestra di riso", "Bruschette"],
      secondi: ["Frittata + insalata", "Polpette + purè"]
    },
    gio: {
      primi: ["Pasta carbonara", "Minestrone", "Insalata di riso"],
      secondi: ["Hamburger + verdure", "Formaggi + insalata"]
    },
    ven: {
      primi: ["Pasta al salmone", "Zuppa di ceci", "Antipasto freddo"],
      secondi: ["Pesce + spinaci", "Uova + contorno"]
    },
    sab: {
      primi: ["Lasagne", "Pasta al pesto", "Risotto"],
      secondi: ["Arrosto + patate", "Cotoletta + insalata"]
    },
    dom: {
      primi: ["Tagliatelle al ragù", "Gnocchi", "Minestra"],
      secondi: ["Roast beef + verdure", "Scaloppine + patate"]
    }
  },
  4: { // Settimana 4
    lun: {
      primi: ["Pasta ricotta e pomodoro", "Minestra", "Antipasto"],
      secondi: ["Omelette + verdure", "Hamburger + insalata"]
    },
    mar: {
      primi: ["Riso al curry", "Pasta al pesto", "Zuppa di verdure"],
      secondi: ["Pollo + insalata", "Polpette + purè"]
    },
    mer: {
      primi: ["Pasta al ragù", "Minestrone", "Bruschette"],
      secondi: ["Hamburger + purè", "Frittata + contorno"]
    },
    gio: {
      primi: ["Pasta al pomodoro", "Minestra", "Insalata di riso"],
      secondi: ["Uova strapazzate + contorno", "Formaggi + verdure"]
    },
    ven: {
      primi: ["Pasta tonno e limone", "Zuppa", "Antipasto freddo"],
      secondi: ["Pesce + verdure", "Omelette + insalata"]
    },
    sab: {
      primi: ["Cannelloni", "Pasta al ragù", "Risotto"],
      secondi: ["Arrosto + patate", "Pollo + verdure"]
    },
    dom: {
      primi: ["Gnocchi", "Tagliatelle", "Minestra"],
      secondi: ["Scaloppine + insalata", "Roast beef + patate"]
    }
  }
};

// Anchor per calcolare la "settimana di rotazione".
// Scelgo un lunedì come base: 2026-01-26 è un lunedì.
const ROTATION_ANCHOR = new Date("2026-01-26T00:00:00");

// ====== HELPERS ======
function toISODate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function dayKeyFromDate(d) {
  // JS: 0=Dom,1=Lun,...6=Sab
  const map = ["dom","lun","mar","mer","gio","ven","sab"];
  return map[d.getDay()];
}

function weekOfRotation(d) {
  // Calcola settimane trascorse dall'anchor, poi mod 4
  const msPerDay = 24 * 60 * 60 * 1000;
  const days = Math.floor((stripTime(d) - stripTime(ROTATION_ANCHOR)) / msPerDay);
  const weeks = Math.floor(days / 7);
  const idx = ((weeks % 4) + 4) % 4; // gestisce date prima dell'anchor
  return idx + 1; // 1..4
}

function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function renderRadioOptions(container, name, items) {
  container.innerHTML = "";
  items.forEach((text, i) => {
    const id = `${name}_${i}`;
    const wrap = document.createElement("label");
    wrap.className = "opt";
    wrap.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.id = id;
    input.value = text;

    const span = document.createElement("span");
    span.textContent = text;

    wrap.appendChild(input);
    wrap.appendChild(span);
    container.appendChild(wrap);
  });
}

function getSelectedRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : "";
}

function setStatus(msg, type = "") {
  const status = document.getElementById("status");
  status.textContent = msg;
  status.className = "status" + (type ? ` ${type}` : "");
}

async function postToDiscord(payload) {
  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Webhook error: ${res.status} ${res.statusText} ${text}`.trim());
  }
}

// ====== UI LOGIC ======
function updateMenuForDate(dateStr) {
  const d = dateStr ? new Date(dateStr + "T00:00:00") : new Date();
  const wk = weekOfRotation(d);
  const dk = dayKeyFromDate(d);

  const dayMenu = MENU[wk][dk];
  if (!dayMenu) {
    setStatus("Nessun menù trovato per questa data.", "error");
    return;
  }

  renderRadioOptions(document.getElementById("primiOptions"), "primo", dayMenu.primi);
  renderRadioOptions(document.getElementById("secondiOptions"), "secondo", dayMenu.secondi);

  setStatus(`Menù caricato: Settimana ${wk} — ${dk.toUpperCase()} (${toISODate(d)})`);
}

function resetForm() {
  document.getElementById("menuForm").reset();
  document.getElementById("date").value = toISODate(new Date());
  updateMenuForDate(document.getElementById("date").value);
  setStatus("Reset effettuato.");
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  dateInput.value = toISODate(new Date());
  updateMenuForDate(dateInput.value);

  dateInput.addEventListener("change", () => updateMenuForDate(dateInput.value));

  document.getElementById("resetBtn").addEventListener("click", resetForm);

  document.getElementById("menuForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    setStatus("Invio in corso...");

    try {
      const name = document.getElementById("name").value.trim();
      const date = document.getElementById("date").value || toISODate(new Date());
      const note = document.getElementById("note").value.trim();

      const altroPrimo = document.getElementById("altroPrimo").value.trim();
      const altroSecondo = document.getElementById("altroSecondo").value.trim();

      const primoScelto = getSelectedRadioValue("primo");
      const secondoScelto = getSelectedRadioValue("secondo");

      if (!name) {
        setStatus("Inserisci il nome (obbligatorio).", "error");
        submitBtn.disabled = false;
        return;
      }

      // almeno una scelta per primo e secondo: o radio, o "altro"
      if (!primoScelto && !altroPrimo) {
        setStatus("Scegli un primo oppure scrivi qualcosa in 'Altro (primo)'.", "error");
        submitBtn.disabled = false;
        return;
      }
      if (!secondoScelto && !altroSecondo) {
        setStatus("Scegli un secondo oppure scrivi qualcosa in 'Altro (secondo)'.", "error");
        submitBtn.disabled = false;
        return;
      }

      const dObj = new Date(date + "T00:00:00");
      const wk = weekOfRotation(dObj);
      const dk = dayKeyFromDate(dObj);

      const primoFinale = altroPrimo ? `Altro: ${altroPrimo}` : primoScelto;
      const secondoFinale = altroSecondo ? `Altro: ${altroSecondo}` : secondoScelto;

      const content =
`🍽️ **Scelta menù**
👤 Nome: **${name}**
📅 Data: **${date}** (Settimana ${wk} — ${dk.toUpperCase()})
🍝 Primo: **${primoFinale}**
🥩 Secondo: **${secondoFinale}**
📝 Note: ${note ? note : "_(nessuna)_"}
`;

      await postToDiscord({ content });

      setStatus("Inviato con successo ✅", "ok");
      // opzionale: pulisco solo le scelte, non il nome
      document.querySelectorAll('input[name="primo"]').forEach(r => r.checked = false);
      document.querySelectorAll('input[name="secondo"]').forEach(r => r.checked = false);
      document.getElementById("altroPrimo").value = "";
      document.getElementById("altroSecondo").value = "";
      document.getElementById("note").value = "";
    } catch (err) {
      console.error(err);
      setStatus("Errore durante l'invio. Se stai usando file:// prova con un server locale.", "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
});
