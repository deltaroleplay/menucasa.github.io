const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1465746218729603176/J51mUaC1lmsHgd78Hk9cKqYAnWWeFgsvfrUxXgJJUvt1bHZbqx_DHULME8RuYoIzOBG8";

/**
 * Menù 30 giorni NON ripetuto (giorno 1..30).
 * Ogni giorno: pranzo { primi(3), secondi(2) } + cena { primi(3), secondi(2) }
 * SOLO ingredienti forniti.
 */
const MENU_30 = [
  {
    pranzo: {
      primi: ["Riso con zucchine e carote", "Farro con pomodorini e olive taggiasche", "Minestrone di verdure miste"],
      secondi: ["Petto di pollo alla piastra + insalata", "Hamburger + patate al forno"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata di farro con cetriolo e pomodorini", "Affettato misto + mozzarella"],
      secondi: ["Orata al forno + fagiolini", "Sofficini ai funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con pancetta e cipolle", "Riso con broccoli", "Lenticchie in minestra"],
      secondi: ["Fusi di pollo al forno + patate", "Pangasio al forno + zucchine"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata di riso con olive verdi e pomodorini", "Ricotta + pomodorini"],
      secondi: ["Carne fettina alla piastra + insalata", "Croccolone di pesce + carote saltate"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con melanzane e peperoni", "Tagliatelle con ricotta e spinaci", "Minestrone con fagiolini"],
      secondi: ["Salsiccia + peperoni", "Pangasio + spinaci"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata mista con avocado e cetriolo", "Affettato + formaggio a fette"],
      secondi: ["Hamburger + broccoli", "Petto di pollo + zucchine"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con funghi misti", "Farro con fagiolini e pomodorini", "Fagioli cannellini in zuppa"],
      secondi: ["Carne macinata (polpettine) + patate", "Orata al forno + verdure miste"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata di farro con olive verdi", "Mozzarella + pomodorini"],
      secondi: ["Frittata con verdure miste", "Croccolone di pesce + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle al ragù (carne macinata)", "Riso con spinaci e grattugiato", "Minestrone classico"],
      secondi: ["Pollo intero tipo spiedo + patate", "Pangasio gratinato + broccoli"]
    },
    cena: {
      primi: ["Vellutata di funghi misti", "Insalata di riso con cetriolo", "Tagliere affettati (fesa/bresaola/cotto)"],
      secondi: ["Salsiccia + cavolfiore", "Orata + zucchine"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con carote e cipolle", "Tagliatelle con prosciutto cubetti e zucchine", "Zuppa di borlotti"],
      secondi: ["Carne fettina + peperoni", "Hamburger + fagiolini"]
    },
    cena: {
      primi: ["Vellutata di peperoni", "Insalata mista con avocado", "Ricotta + olive taggiasche"],
      secondi: ["Fusi di pollo + insalata", "Croccolone di pesce + spinaci"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con melanzane", "Farro con pomodorini e mozzarella", "Minestrone con lenticchie"],
      secondi: ["Petto di pollo + broccoli", "Pangasio + patate"]
    },
    cena: {
      primi: ["Vellutata di carote e cipolla", "Insalata di farro con cetriolo", "Affettato + formaggio a fette"],
      secondi: ["Sofficini funghi + insalata", "Hamburger + verdure miste"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con funghi misti", "Riso con peperoni", "Fagioli cannellini in minestra"],
      secondi: ["Salsiccia + zucchine", "Orata + patate"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata di riso con olive verdi", "Mozzarella + pomodorini"],
      secondi: ["Petto di pollo + insalata", "Croccolone di pesce + fagiolini"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con broccoli e grattugiato", "Tagliatelle con pancetta e funghi", "Minestrone di verdure miste"],
      secondi: ["Carne macinata (hamburger fatti in casa) + patate", "Pangasio + spinaci"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata mista (insalata+carote+cetriolo)", "Affettati + ricotta"],
      secondi: ["Fusi di pollo + verdure miste", "Orata + broccoli"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con salmone e zucchine", "Farro con pomodorini e olive taggiasche", "Zuppa di lenticchie"],
      secondi: ["Petto di pollo + patate", "Salsiccia + peperoni"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata di farro con cetriolo e pomodorini", "Mozzarella + pomodorini"],
      secondi: ["Pangasio + fagiolini", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con ragù e grattugiato", "Riso con carote e cipolle", "Minestrone con fagiolini"],
      secondi: ["Orata + melanzane", "Hamburger + insalata"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata di riso con olive verdi", "Affettato (cotto/salame) + formaggio"],
      secondi: ["Carne fettina + zucchine", "Croccolone di pesce + broccoli"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con peperoni e cipolle", "Tagliatelle con prosciutto cubetti", "Zuppa di borlotti"],
      secondi: ["Pollo spiedo + verdure miste", "Pangasio + patate"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata mista con avocado", "Ricotta + pomodorini"],
      secondi: ["Salsiccia + spinaci", "Petto di pollo + fagiolini"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con funghi e grattugiato", "Farro con melanzane e pomodorini", "Minestrone classico"],
      secondi: ["Hamburger + patate", "Orata + zucchine"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata di farro con olive taggiasche", "Affettato misto + mozzarella"],
      secondi: ["Pangasio + broccoli", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con pancetta e broccoli", "Riso con zucchine", "Cannellini in zuppa"],
      secondi: ["Carne fettina + peperoni", "Fusi di pollo + patate"]
    },
    cena: {
      primi: ["Vellutata di peperoni", "Insalata di riso con cetriolo", "Formaggio a fette + pomodorini"],
      secondi: ["Croccolone di pesce + spinaci", "Hamburger + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con fagiolini e olive verdi", "Tagliatelle con ricotta e funghi", "Zuppa di lenticchie"],
      secondi: ["Pollo intero tipo spiedo + patate", "Pangasio + verdure miste"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata mista (insalata+carote+cetriolo)", "Affettato + ricotta"],
      secondi: ["Salsiccia + cavolfiore", "Orata + fagiolini"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con peperoni e cipolle", "Farro con pomodorini e mozzarella", "Minestrone con borlotti"],
      secondi: ["Petto di pollo + zucchine", "Hamburger + broccoli"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata di farro con avocado", "Mozzarella + olive taggiasche"],
      secondi: ["Pangasio + spinaci", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle al ragù", "Riso con funghi misti", "Minestrone classico"],
      secondi: ["Carne macinata (polpettine) + patate", "Orata + melanzane"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata di riso con olive verdi e pomodorini", "Affettato misto + formaggio a fette"],
      secondi: ["Fusi di pollo + insalata", "Croccolone di pesce + fagiolini"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con peperoni e melanzane", "Riso con spinaci", "Zuppa di cannellini"],
      secondi: ["Salsiccia + peperoni", "Pangasio + zucchine"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata mista con cetriolo", "Ricotta + pomodorini"],
      secondi: ["Hamburger + patate", "Orata + broccoli"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con prosciutto cubetti e funghi", "Farro con carote e cipolle", "Zuppa di lenticchie"],
      secondi: ["Petto di pollo + fagiolini", "Croccolone di pesce + insalata"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata di farro con olive verdi", "Affettato + mozzarella"],
      secondi: ["Pangasio + spinaci", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con salmone e broccoli", "Farro con pomodorini e olive taggiasche", "Minestrone di verdure miste"],
      secondi: ["Pollo spiedo + patate", "Hamburger + insalata"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata di riso con cetriolo e pomodorini", "Formaggio a fette + pomodorini"],
      secondi: ["Orata + fagiolini", "Salsiccia + cavolfiore"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con pancetta e zucchine", "Riso con peperoni", "Borlotti in minestra"],
      secondi: ["Carne fettina + insalata", "Pangasio + broccoli"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata mista con avocado", "Affettato misto + ricotta"],
      secondi: ["Fusi di pollo + patate", "Croccolone di pesce + spinaci"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con funghi e grattugiato", "Riso con zucchine e carote", "Minestrone classico"],
      secondi: ["Hamburger + patate", "Orata + melanzane"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata di farro con pomodorini", "Mozzarella + olive verdi"],
      secondi: ["Petto di pollo + broccoli", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle al ragù + grattugiato", "Farro con peperoni e cipolle", "Zuppa di lenticchie"],
      secondi: ["Salsiccia + peperoni", "Pangasio + fagiolini"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata di riso con olive taggiasche", "Affettato + formaggio a fette"],
      secondi: ["Orata + zucchine", "Hamburger + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con funghi misti", "Farro con fagiolini e pomodorini", "Cannellini in zuppa"],
      secondi: ["Pollo spiedo + patate", "Carne fettina + broccoli"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata mista (insalata+carote+cetriolo)", "Ricotta + pomodorini"],
      secondi: ["Croccolone di pesce + verdure miste", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con prosciutto cubetti e spinaci", "Riso con peperoni e cipolle", "Minestrone con borlotti"],
      secondi: ["Hamburger + patate", "Orata + fagiolini"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata di farro con avocado", "Affettato misto + mozzarella"],
      secondi: ["Pangasio + spinaci", "Salsiccia + zucchine"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con melanzane e olive verdi", "Riso con zucchine", "Zuppa di lenticchie"],
      secondi: ["Petto di pollo + insalata", "Croccolone di pesce + broccoli"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata di riso con pomodorini", "Formaggio a fette + pomodorini"],
      secondi: ["Fusi di pollo + patate", "Orata + verdure miste"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle con pancetta e funghi", "Farro con carote e cipolle", "Cannellini in minestra"],
      secondi: ["Carne macinata (polpettine) + patate", "Pangasio + fagiolini"]
    },
    cena: {
      primi: ["Vellutata di zucchine", "Insalata mista con cetriolo", "Affettato + ricotta"],
      secondi: ["Hamburger + broccoli", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Riso con salmone e pomodorini", "Farro con fagiolini e olive taggiasche", "Minestrone classico"],
      secondi: ["Pollo intero tipo spiedo + patate", "Salsiccia + cavolfiore"]
    },
    cena: {
      primi: ["Vellutata di carote", "Insalata di farro con pomodorini", "Mozzarella + pomodorini"],
      secondi: ["Orata + zucchine", "Croccolone di pesce + spinaci"]
    }
  },
  {
    pranzo: {
      primi: ["Tagliatelle al ragù", "Riso con funghi misti", "Zuppa di borlotti"],
      secondi: ["Petto di pollo + fagiolini", "Hamburger + patate"]
    },
    cena: {
      primi: ["Vellutata di cavolfiore", "Insalata di riso con olive verdi", "Affettato misto + formaggio a fette"],
      secondi: ["Pangasio + broccoli", "Sofficini funghi + insalata"]
    }
  },
  {
    pranzo: {
      primi: ["Farro con peperoni e melanzane", "Riso con spinaci e grattugiato", "Minestrone di verdure miste"],
      secondi: ["Orata + patate", "Carne fettina + insalata"]
    },
    cena: {
      primi: ["Vellutata di broccoli", "Insalata mista con avocado e cetriolo", "Ricotta + pomodorini e olive taggiasche"],
      secondi: ["Fusi di pollo + verdure miste", "Croccolone di pesce + fagiolini"]
    }
  }
];

function toISODate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function setStatus(msg, type = "") {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = "status" + (type ? ` ${type}` : "");
}

function renderRadio(container, groupName, items) {
  container.innerHTML = "";
  items.forEach((text, i) => {
    const id = `${groupName}_${i}`;
    const lab = document.createElement("label");
    lab.className = "opt";
    lab.htmlFor = id;

    const inp = document.createElement("input");
    inp.type = "radio";
    inp.name = groupName;
    inp.id = id;
    inp.value = text;

    const span = document.createElement("span");
    span.textContent = text;

    lab.appendChild(inp);
    lab.appendChild(span);
    container.appendChild(lab);
  });
}

function clearRadios(groupName) {
  document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => { r.checked = false; });
}

function getChecked(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function menuForDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDate(); // 1..31
  if (day < 1 || day > 30) return null;
  return { day, data: MENU_30[day - 1] };
}

async function postToDiscord(content) {
  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`Webhook error ${res.status}: ${t}`.trim());
  }
}

// Quando l’utente scrive in "Altro", tolgo la spunta ai radio.
// Quando sceglie un radio, svuoto il campo "Altro".
function wireAltroSync(radioGroup, altroInputId) {
  const altro = document.getElementById(altroInputId);

  // Se scrive in Altro -> deseleziona radio
  altro.addEventListener("input", () => {
    if (altro.value.trim().length > 0) {
      clearRadios(radioGroup);
    }
  });

  // Se seleziona un radio -> svuota Altro
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t && t.matches(`input[type="radio"][name="${radioGroup}"]`)) {
      altro.value = "";
    }
  });
}

function loadMenu() {
  const date = document.getElementById("date").value;
  const info = document.getElementById("menuInfo");

  const m = menuForDate(date);
  if (!m) {
    info.textContent = "⚠️ Menù non disponibile per questa data (solo giorni 1–30).";
    ["pranzoPrimi","pranzoSecondi","cenaPrimi","cenaSecondi"].forEach(id => {
      document.getElementById(id).innerHTML = "";
    });
    setStatus("");
    return;
  }

  info.textContent = `📅 Giorno ${m.day} del mese — Menù caricato (Pranzo + Cena).`;

  renderRadio(document.getElementById("pranzoPrimi"), "pranzo_primo", m.data.pranzo.primi);
  renderRadio(document.getElementById("pranzoSecondi"), "pranzo_secondo", m.data.pranzo.secondi);

  renderRadio(document.getElementById("cenaPrimi"), "cena_primo", m.data.cena.primi);
  renderRadio(document.getElementById("cenaSecondi"), "cena_secondo", m.data.cena.secondi);

  setStatus("Seleziona le scelte e invia.");

  // Riaggancio la sincronizzazione (Altro <-> Radio)
  wireAltroSync("pranzo_primo", "altroPranzoPrimo");
  wireAltroSync("pranzo_secondo", "altroPranzoSecondo");
  wireAltroSync("cena_primo", "altroCenaPrimo");
  wireAltroSync("cena_secondo", "altroCenaSecondo");
}

function resetForm() {
  document.getElementById("menuForm").reset();
  document.getElementById("date").value = toISODate(new Date());
  loadMenu();
  setStatus("Reset effettuato.");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("date").value = toISODate(new Date());
  loadMenu();

  document.getElementById("date").addEventListener("change", () => {
    // pulisco anche eventuali “Altro” quando cambio data
    ["altroPranzoPrimo","altroPranzoSecondo","altroCenaPrimo","altroCenaSecondo","note"].forEach(id=>{
      document.getElementById(id).value = "";
    });
    loadMenu();
  });

  document.getElementById("resetBtn").addEventListener("click", resetForm);

  document.getElementById("menuForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;

    try {
      const name = document.getElementById("name").value.trim();
      const date = document.getElementById("date").value;
      const note = document.getElementById("note").value.trim();

      if (!name) {
        setStatus("Inserisci il nome (obbligatorio).", "error");
        submitBtn.disabled = false;
        return;
      }
      if (!date) {
        setStatus("Seleziona una data (obbligatorio).", "error");
        submitBtn.disabled = false;
        return;
      }

      const m = menuForDate(date);
      if (!m) {
        setStatus("Menù non disponibile per questa data (solo giorni 1–30).", "error");
        submitBtn.disabled = false;
        return;
      }

      const altroPranzoPrimo = document.getElementById("altroPranzoPrimo").value.trim();
      const altroPranzoSecondo = document.getElementById("altroPranzoSecondo").value.trim();
      const altroCenaPrimo = document.getElementById("altroCenaPrimo").value.trim();
      const altroCenaSecondo = document.getElementById("altroCenaSecondo").value.trim();

      const pranzoPrimo = altroPranzoPrimo ? `Altro: ${altroPranzoPrimo}` : getChecked("pranzo_primo");
      const pranzoSecondo = altroPranzoSecondo ? `Altro: ${altroPranzoSecondo}` : getChecked("pranzo_secondo");

      const cenaPrimo = altroCenaPrimo ? `Altro: ${altroCenaPrimo}` : getChecked("cena_primo");
      const cenaSecondo = altroCenaSecondo ? `Altro: ${altroCenaSecondo}` : getChecked("cena_secondo");

      if (!pranzoPrimo || !pranzoSecondo || !cenaPrimo || !cenaSecondo) {
        setStatus("Completa PRANZO e CENA: scegli un'opzione o scrivi 'Altro' per ciascun campo.", "error");
        submitBtn.disabled = false;
        return;
      }

      const content =
`🍽️ **Scelta menù (30 giorni)**
👤 Nome: **${name}**
📅 Data: **${date}** (Giorno ${m.day})

🕛 **PRANZO**
• Primo/Altro: **${pranzoPrimo}**
• Secondo/Altro: **${pranzoSecondo}**

🌙 **CENA**
• Primo/Altro: **${cenaPrimo}**
• Secondo/Altro: **${cenaSecondo}**

📝 Note: ${note ? note : "_(nessuna)_"}
`;

      setStatus("Invio in corso...");
      await postToDiscord(content);

      setStatus("Inviato con successo ✅", "ok");

      // pulisco solo le scelte, non nome/data
      ["altroPranzoPrimo","altroPranzoSecondo","altroCenaPrimo","altroCenaSecondo","note"].forEach(id=>{
        document.getElementById(id).value = "";
      });
      document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    } catch (err) {
      console.error(err);
      setStatus("Errore durante l'invio. Se stai usando file:// prova un server locale.", "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
});
