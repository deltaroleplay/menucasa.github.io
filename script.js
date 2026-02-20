(()=>{try{const _x=["log","warn","error","info","debug"];for(let i=0;i<_x.length;i++){try{console[_x[i]]=(...a)=>{};}catch(e){}}}catch(e){}})();

const _k=(s=>{try{return atob(s);}catch(e){return"";}})("bfGEQ7CV5g2ot/eTZO8D2Q==");
const _p=[
  "BZTSAIf6r1VERy5Lx0CJCB6/2y+FgPmlR3svMNdtlqVi8fIm4ddUrDI/BX+6Kzv2boHhFutaRZt9K0w7qY5whWXHggcMSCuDAyVsMSmcerFY1pGzUlYinwgGatIyl0viPOJOinZRWIUEBqjEBZd11Ggpeal+H3KtaA==",
  "hsB2koWopxF0Jinda42wXb2rf/2HEvEhd1oo5ntgrzDh5Rb1JkKfJ0gYSavcKsFiiNMCBSknzyAEMlk6oh2QU8G8iHB6Z/8QM13bKpBP/mrxMLlUUxCMOSTH/S25A8Fc7GXWcRhDmyudhegf1xPjSzpgqDgEb6vEzg==",
  "0niklBekIy1VLf91ZrAl4qlzrTsV3nVdVhH+jnadOs/1HQQzdI5UUiJWWsMe2hWb3w0ZAXu/Ghdjox+PFMBYypb1fUFnlCIqp7UdjGS1MNZ76DUWBJw/xtPOKp4qg0gFUo8xIjaf5pCz6FzzAMqxLlyEKCB+Q931kg==",
  "JuzZRpQvRBdCpNJasRKLv0+sUwP0BgslJSuoWrcSwd9RenluuisCM+BGg1+9Bw==",
  "4SlIkltRJlVYwhzWFJg="
];
const _c=new Array(_p.length);
function _d(i){
  let v=_c[i]; if(v!==undefined) return v;
  // Alcuni browser possono essere più “schizzinosi” con base64 non standard.
  // Se la decodifica fallisce, non blocchiamo tutto il sito: lasciamo la stringa vuota.
  let b="";
  try{ b = atob(_p[i]); }catch(e){ _c[i]=""; return ""; }
  let out="";
  for(let j=0;j<b.length;j++){
    const kk=_k.charCodeAt((j+i)&15) ^ ((i*31 + j*17)&255);
    out+=String.fromCharCode(b.charCodeAt(j)^kk);
  }
  _c[i]=out; return out;
}

const DISCORD_WEBHOOK_MENU=_d(0);
const DISCORD_WEBHOOK_FEEDBACK=_d(1);
const DISCORD_WEBHOOK_DISHES=_d(2);
const TELEGRAM_BOT_TOKEN=_d(3);
const TELEGRAM_CHAT_ID=_d(4);


// ========================
// MENU 30 GIORNI (1..30)
// (NON RIPETUTO)
// ========================
const MENU_30 = [
  // Giorno 1
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

  // Giorno 2
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

  // Giorno 3
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

  // Giorno 4
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

  // Giorno 5
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

  // Giorno 6
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

  // Giorno 7
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

  // Giorno 8
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

  // Giorno 9
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

  // Giorno 10
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

  // Giorno 11
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

  // Giorno 12
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

  // Giorno 13
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

  // Giorno 14
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

  // Giorno 15
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

  // Giorno 16
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

  // Giorno 17
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

  // Giorno 18
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

  // Giorno 19
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

  // Giorno 20
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

  // Giorno 21
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

  // Giorno 22
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

  // Giorno 23
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

  // Giorno 24
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

  // Giorno 25
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

  // Giorno 26
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

  // Giorno 27
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

  // Giorno 28
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

  // Giorno 29
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

  // Giorno 30
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


// ========================
// HELPERS
// ========================
function toISODate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function setStatus(elId, msg, type = "") {
  const el = document.getElementById(elId);
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
  document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => (r.checked = false));
}

function getChecked(groupName) {
  return document.querySelector(`input[name="${groupName}"]:checked`)?.value || "";
}

function menuForDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDate();
  if (day < 1 || day > 30) return null;
  return { day, data: MENU_30[day - 1] };
}

// ========================
// REGOLE DINAMICHE (DOMENICA / MERCOLEDÌ / AFFETTATI)
// ========================
const AFFETTATI_RE = /(affettat|tagliere)/i;

function cloneMenuData(data){
  return {
    pranzo: {
      primi: Array.isArray(data?.pranzo?.primi) ? [...data.pranzo.primi] : [],
      secondi: Array.isArray(data?.pranzo?.secondi) ? [...data.pranzo.secondi] : []
    },
    cena: {
      primi: Array.isArray(data?.cena?.primi) ? [...data.cena.primi] : [],
      secondi: Array.isArray(data?.cena?.secondi) ? [...data.cena.secondi] : []
    }
  };
}

// ISO week number (1..53)
function getISOWeek(d){
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Thursday in current week decides the year.
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

function applyMenuRules(dateStr, baseData){
  const d = new Date(dateStr + 'T00:00:00');
  const dow = d.getDay(); // 0=Dom ... 3=Mer
  const out = cloneMenuData(baseData);

  // 1) Affettati: solo 1 volta a settimana -> qui li lasciamo SOLO la domenica
  if (dow !== 0) {
    out.pranzo.primi = out.pranzo.primi.filter(x => !AFFETTATI_RE.test(x));
    out.pranzo.secondi = out.pranzo.secondi.filter(x => !AFFETTATI_RE.test(x));
    out.cena.primi = out.cena.primi.filter(x => !AFFETTATI_RE.test(x));
    out.cena.secondi = out.cena.secondi.filter(x => !AFFETTATI_RE.test(x));
    // se abbiamo svuotato troppo, mettiamo un'alternativa "da frigo" già presente nel menù
    if (out.cena.primi.length === 0) out.cena.primi = ['Mozzarella + pomodorini'];
    if (out.cena.secondi.length === 0) out.cena.secondi = ['Ricotta + pomodorini'];
  }

  // 2) Domenica: piatti "speciali" (no vellutate, no legumi/borlotti/cannellini, niente roba "light")
  //    -> rotazione tra domeniche per avere cose BUONE e DIVERSE
  if (dow === 0) {
    const week = getISOWeek(d);

    // Nota: ci basiamo su ingredienti che nel menù compaiono già spesso (ragù, carne macinata, mozzarella, ricotta, spinaci, salsiccia, patate).
    // Ogni domenica sceglie un “menù speciale” diverso.
    const SUNDAY_SPECIALS = [
      {
        pranzo: {
          primi: [
            'Lasagne al ragù e mozzarella (porzione abbondante)',
            'Tagliatelle al ragù + grattugiato'
          ],
          secondi: [
            'Polpette al sugo + patate al forno',
            'Salsiccia + peperoni + patate'
          ]
        },
        cena: {
          primi: [
            'Pasta al forno (ragù + mozzarella) – “scarpetta” consentita',
            'Tagliere: affettato misto + mozzarella (1× settimana)'
          ],
          secondi: [
            'Hamburger + patate al forno (extra)',
            'Orata al forno + patate'
          ]
        }
      },
      {
        pranzo: {
          primi: [
            'Cannelloni ricotta e spinaci gratinati',
            'Tagliatelle con ricotta e spinaci'
          ],
          secondi: [
            'Fusi di pollo al forno + patate',
            'Salsiccia + spinaci'
          ]
        },
        cena: {
          primi: [
            'Riso al forno con mozzarella e verdure (super filante)',
            'Tagliere: affettato misto + mozzarella (1× settimana)'
          ],
          secondi: [
            'Carne macinata (polpettine) + patate',
            'Pangasio al forno + zucchine'
          ]
        }
      },
      {
        pranzo: {
          primi: [
            'Tagliatelle con prosciutto cubetti e funghi (versione “cremosa”)',
            'Tagliatelle con pancetta e cipolle'
          ],
          secondi: [
            'Croccolone di pesce + contorno',
            'Sofficini ai funghi + insalata (ok: domenica “sgarra”)'
          ]
        },
        cena: {
          primi: [
            'Calzone al forno (prosciutto e mozzarella) – versione “domenica”',
            'Tagliere: affettato misto + mozzarella (1× settimana)'
          ],
          secondi: [
            'Hamburger + patate al forno',
            'Carne fettina alla piastra + patate'
          ]
        }
      },
      {
        pranzo: {
          primi: [
            'Riso con salsiccia e spinaci (ricco)',
            'Tagliatelle al ragù (carne macinata)'
          ],
          secondi: [
            'Salsiccia + zucchine + patate',
            'Polpette al sugo + patate al forno'
          ]
        },
        cena: {
          primi: [
            'Pasta al forno “mista” (ragù + mozzarella)',
            'Tagliere: affettato misto + mozzarella (1× settimana)'
          ],
          secondi: [
            'Orata al forno + patate',
            'Fusi di pollo al forno + patate'
          ]
        }
      }
    ];

    const pick = SUNDAY_SPECIALS[week % SUNDAY_SPECIALS.length];
    out.pranzo.primi = pick.pranzo.primi;
    out.pranzo.secondi = pick.pranzo.secondi;
    out.cena.primi = pick.cena.primi;
    out.cena.secondi = pick.cena.secondi;

    // pulizia extra: niente vellutate e niente legumi la domenica
    const NO_SUNDAY_RE = /(vellutat|minestr|zuppa|borlott|cannellin|lenticch)/i;
    out.pranzo.primi = out.pranzo.primi.filter(x => !NO_SUNDAY_RE.test(x));
    out.cena.primi = out.cena.primi.filter(x => !NO_SUNDAY_RE.test(x));
  }

  // 3) Mercoledì: rotazione Panzerotti / Calzoni / Gnocco fritto
  if (dow === 3) {
    const week = getISOWeek(d);
    const rot = [
      'Panzerotti (mozzarella)',
      'Calzoni al forno (prosciutto e mozzarella)',
      'Gnocco fritto + mozzarella'
    ];
    const choice = rot[week % rot.length];

    // lo mettiamo come prima opzione "Primo/alternativa" a cena
    out.cena.primi = [choice, ...out.cena.primi.filter(x => x !== choice)];
  }

  return out;
}

async function postToDiscord(webhookUrl, content) {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`Webhook error ${res.status}: ${t}`.trim());
  }
}
function stripDiscordMarkdown(text) {
  // Discord usa **bold** e _(italico)_; Telegram senza parse_mode può ricevere testo "pulito".
  return String(text)
    .replace(/\*\*/g, "")        // rimuove **
    .replace(/_/g, "")             // rimuove _
    .replace(/`/g, "");            // rimuove backtick
}

async function postToTelegram(text) {
  // Se token/chat_id non sono settati, salta in silenzio (così Discord continua a funzionare).
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: stripDiscordMarkdown(text),
    disable_web_page_preview: true
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`Telegram error ${res.status}: ${t}`.trim());
  }
}



// ========================
// SYNC "ALTRO" <-> RADIO
// ========================
function wireAltroSync(radioGroup, altroInputId) {
  const altro = document.getElementById(altroInputId);

  // Se scrive in Altro -> deseleziona radio
  altro.addEventListener("input", () => {
    if (altro.value.trim().length > 0) clearRadios(radioGroup);
  });

  // Se seleziona un radio -> svuota Altro
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t && t.matches(`input[type="radio"][name="${radioGroup}"]`)) {
      altro.value = "";
    }
  });
}


// ========================
// LOAD MENU
// ========================
function loadMenu() {
  const date = document.getElementById("date").value;
  const info = document.getElementById("menuInfo");

  if (!date) {
    info.textContent = "📅 Seleziona una data per caricare il menù.";
    ["pranzoPrimi","pranzoSecondi","cenaPrimi","cenaSecondi"].forEach(id => {
      document.getElementById(id).innerHTML = "";
    });
    setStatus("status", "");
    return;
  }

  const m = menuForDate(date);
  if (!m) {
    info.textContent = "⚠️ Menù non disponibile per questa data (solo giorni 1–30).";
    ["pranzoPrimi","pranzoSecondi","cenaPrimi","cenaSecondi"].forEach(id => {
      document.getElementById(id).innerHTML = "";
    });
    setStatus("status", "");
    return;
  }

  const d = new Date(date + "T00:00:00");
  const dow = d.getDay();
  const names = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
  const adjusted = applyMenuRules(date, m.data);

  let badge = "";
  if (dow === 0) badge = " — ⭐ Domenica speciale";
  if (dow === 3) badge = ` — 🔁 Mercoledì: ${adjusted.cena.primi[0]}`;

  info.textContent = `📅 ${names[dow]} • Giorno ${m.day} del mese — Menù caricato (Pranzo + Cena)${badge}.`;

  renderRadio(document.getElementById("pranzoPrimi"), "pranzo_primo", adjusted.pranzo.primi);
  renderRadio(document.getElementById("pranzoSecondi"), "pranzo_secondo", adjusted.pranzo.secondi);
  renderRadio(document.getElementById("cenaPrimi"), "cena_primo", adjusted.cena.primi);
  renderRadio(document.getElementById("cenaSecondi"), "cena_secondo", adjusted.cena.secondi);

  setStatus("status", "Seleziona le scelte e invia.");

  wireAltroSync("pranzo_primo", "altroPranzoPrimo");
  wireAltroSync("pranzo_secondo", "altroPranzoSecondo");
  wireAltroSync("cena_primo", "altroCenaPrimo");
  wireAltroSync("cena_secondo", "altroCenaSecondo");
}

function resetMenuForm() {
  document.getElementById("menuForm").reset();
  document.getElementById("date").value = toISODate(new Date());
  loadMenu();
  setStatus("status", "Reset effettuato.");
}


// ========================
// INIT + HANDLERS
// ========================
document.addEventListener("DOMContentLoaded", () => {
  // Init data
  document.getElementById("date").value = toISODate(new Date());
  loadMenu();

  // Change date
  document.getElementById("date").addEventListener("change", () => {
    // pulisco “Altro” quando cambio data
    ["altroPranzoPrimo","altroPranzoSecondo","altroCenaPrimo","altroCenaSecondo","note"].forEach(id=>{
      document.getElementById(id).value = "";
    });
    loadMenu();
  });

  // Reset
  document.getElementById("resetBtn").addEventListener("click", resetMenuForm);

  // Submit menu scelta
  document.getElementById("menuForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    btn.disabled = true;

    try {
      const name = document.getElementById("name").value.trim();
      const date = document.getElementById("date").value;
      const note = document.getElementById("note").value.trim();

      if (!name) { setStatus("status","Inserisci il nome (obbligatorio).","error"); btn.disabled=false; return; }
      if (!date) { setStatus("status","Seleziona una data (obbligatorio).","error"); btn.disabled=false; return; }

      const m = menuForDate(date);
      if (!m) { setStatus("status","Menù non disponibile per questa data (solo giorni 1–30).","error"); btn.disabled=false; return; }

      const altroPranzoPrimo = document.getElementById("altroPranzoPrimo").value.trim();
      const altroPranzoSecondo = document.getElementById("altroPranzoSecondo").value.trim();
      const altroCenaPrimo = document.getElementById("altroCenaPrimo").value.trim();
      const altroCenaSecondo = document.getElementById("altroCenaSecondo").value.trim();

      const pranzoPrimo = altroPranzoPrimo ? `Altro: ${altroPranzoPrimo}` : getChecked("pranzo_primo");
      const pranzoSecondo = altroPranzoSecondo ? `Altro: ${altroPranzoSecondo}` : getChecked("pranzo_secondo");
      const cenaPrimo = altroCenaPrimo ? `Altro: ${altroCenaPrimo}` : getChecked("cena_primo");
      const cenaSecondo = altroCenaSecondo ? `Altro: ${altroCenaSecondo}` : getChecked("cena_secondo");

      if (!pranzoPrimo || !pranzoSecondo || !cenaPrimo || !cenaSecondo) {
        setStatus("status","Completa PRANZO e CENA: scegli un'opzione o scrivi 'Altro' per ciascun campo.","error");
        btn.disabled=false; return;
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

      setStatus("status","Invio in corso...");
      await Promise.all([
        postToDiscord(DISCORD_WEBHOOK_MENU, content),
        postToTelegram(content)
      ]);

      setStatus("status","Inviato con successo ✅","ok");

      // pulisco solo scelte e note
      ["altroPranzoPrimo","altroPranzoSecondo","altroCenaPrimo","altroCenaSecondo","note"].forEach(id=>{
        document.getElementById(id).value = "";
      });
      document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    } catch (err) {
      console.error(err);
      setStatus("status","Errore durante l'invio. Se stai usando file:// prova un server locale.","error");
    } finally {
      btn.disabled = false;
    }
  });

  // ========================
  // FEEDBACK SITO
  // ========================
  document.getElementById("clearFeedbackBtn").addEventListener("click", () => {
    document.getElementById("feedbackText").value = "";
    setStatus("feedbackStatus", "Pulito.");
  });

  document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("sendFeedbackBtn");
    btn.disabled = true;

    try {
      const name = document.getElementById("name").value.trim() || "Anonimo";
      const msg = document.getElementById("feedbackText").value.trim();
      if (!msg) { setStatus("feedbackStatus","Scrivi un suggerimento prima di inviare.","error"); btn.disabled=false; return; }

      const content =
`💡 **Suggerimento sito**
👤 Da: **${name}**
🕒 Quando: ${new Date().toLocaleString("it-IT")}
📝 Messaggio:
${msg}`;

      setStatus("feedbackStatus","Invio in corso...");
      await Promise.all([
        postToDiscord(DISCORD_WEBHOOK_FEEDBACK, content),
        postToTelegram(content)
      ]);
      setStatus("feedbackStatus","Suggerimento inviato ✅","ok");
      document.getElementById("feedbackText").value = "";
    } catch (err) {
      console.error(err);
      setStatus("feedbackStatus","Errore invio suggerimento.","error");
    } finally {
      btn.disabled = false;
    }
  });

  // ========================
  // PIATTI DA AGGIUNGERE
  // ========================
  document.getElementById("clearDishBtn").addEventListener("click", () => {
    document.getElementById("dishText").value = "";
    setStatus("dishStatus", "Pulito.");
  });

  document.getElementById("dishForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("sendDishBtn");
    btn.disabled = true;

    try {
      const name = document.getElementById("name").value.trim() || "Anonimo";
      const dishes = document.getElementById("dishText").value.trim();
      if (!dishes) { setStatus("dishStatus","Scrivi almeno un piatto prima di inviare.","error"); btn.disabled=false; return; }

      const content =
`➕ **Piatti da aggiungere**
👤 Da: **${name}**
🕒 Quando: ${new Date().toLocaleString("it-IT")}
🍽️ Proposta:
${dishes}`;

      setStatus("dishStatus","Invio in corso...");
      await Promise.all([
        postToDiscord(DISCORD_WEBHOOK_DISHES, content),
        postToTelegram(content)
      ]);
      setStatus("dishStatus","Piatti inviati ✅","ok");
      document.getElementById("dishText").value = "";
    } catch (err) {
      console.error(err);
      setStatus("dishStatus","Errore invio piatti.","error");
    } finally {
      btn.disabled = false;
    }
  });
});
