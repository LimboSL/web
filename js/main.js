(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Menú móvil */
  const btn = $("#menu-btn"), nav = $("#nav");
  btn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
    btn.textContent = abierto ? "CERRAR" : "MENÚ";
  });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A" && nav.classList.contains("abierto")) btn.click(); });

  /* Redes */
  document.querySelectorAll("[data-red]").forEach((a) => {
    const url = CONFIG[a.dataset.red];
    if (url) a.href = url; else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.title = "Próximamente"; a.style.opacity = 0.55; }
  });

  /* Cinta de frases (duplicada para el bucle) */
  const cinta = $("#cinta");
  const items = FRASES.map((f) => `<span${/Miguel/.test(f) ? ' class="miguel"' : ""}>${esc(f)}</span>`).join("");
  cinta.innerHTML = items + items;

  /* Calendario de taco */
  const hoja = $("#hoja"), contador = $("#contador");
  const comentarios = [
    "Vaya. Otra vez lunes 25.",
    "Prueba otra. Por probar...",
    "Encarna dice que son las dos.",
    "El calendario no está roto. Lo hemos comprobado.",
    "Don Evaristo dice que mañana se arregla.",
    "Ya está Venancio rezándole al calendario...",
    "Por tu impaciencia, Karim ha cogido la caja de herramientas.",
    "Yolanda le está dando patadas. Hazme el favor y vuelve otro día.",
    "Noelia dice que sus encantos no funcionan con el calendario.",
    "Gianni le ha ofrecido una copa, pero nada.",
    "Chema está hablando con él en este momento, a ver si atiende a razones.",
    "El calendario acaba de hacer llorar a Ramiro...",
    "Ahora también a Rafa... Buena la has liado.",
    "Remedios dice que ella no ha tocado nada, que no la miren.",
    "Cayetano está ahora liado, pero cuando tenga un momento lo mira.",
    "Kiko dice que te ha visto a ti toquetearlo, que igual lo has roto tú.",
    "Inma propone hacer rayas en una pared... ¿Alguien ha dicho raya?",
    "Llevas %n hojas. Siguen siendo lunes 25.",
  ];
  let n = 0;
  $("#arrancar").addEventListener("click", () => {
    if (hoja.classList.contains("arrancando")) return;
    n++;
    hoja.classList.add("arrancando");
    setTimeout(() => {
      hoja.classList.remove("arrancando");
      if (n === 25) {
        contador.innerHTML = '<a class="enlace-miguel" href="miguel.html">¿Quién es Miguel?</a>';
      } else {
        const c = comentarios[Math.min(n - 1, comentarios.length - 1)];
        contador.textContent = c.replace("%n", n);
      }
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700);
  });

  /* Capítulos */
  $("#episodios").innerHTML = EPISODIOS.map((e) => {
    const listo = Boolean(e.youtube);
    return `<article class="episodio">
      <div class="pantalla" data-yt="${esc(e.youtube)}">
        <img src="img/oficina.jpg" alt="" loading="lazy">
        ${listo
          ? `<button type="button" aria-label="Ver el episodio ${e.n}: ${esc(e.titulo)}"><span>▶</span></button>`
          : `<span class="sello">En producción</span>`}
      </div>
      <div class="info">
        <span class="num">Episodio ${String(e.n).padStart(2, "0")} · ${esc(e.duracion)}</span>
        <h3>${esc(e.titulo)}</h3>
        <p class="resumen">${esc(e.resumen || "")}</p>
        <p class="meta">${listo ? "Ya disponible. Comenta en YouTube y cuéntanos qué te ha parecido." : "Pronto, entero en YouTube. Mientras tanto, clips en TikTok e Instagram."}</p>
        <div class="acciones">
          ${listo
            ? `<a class="btn" href="https://www.youtube.com/watch?v=${esc(e.youtube)}#comments" target="_blank" rel="noopener">Dejar un comentario</a>`
            : `<a class="btn hueco" href="${esc(CONFIG.tiktok)}" target="_blank" rel="noopener">Ver clips en TikTok</a>`}
        </div>
      </div>
    </article>`;
  }).join("");
  // El vídeo solo se carga al pulsar (no instala cookies de YouTube antes)
  document.querySelectorAll(".pantalla button").forEach((b) => b.addEventListener("click", () => {
    const p = b.parentElement, id = p.dataset.yt;
    p.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1" title="Episodio de Limbo S.L." allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }));

  /* Plantilla */
  const iniciales = (n) => n.replace(/^(Doña|Don) /, "").split(" ").map((p) => p[0]).join("").slice(0, 2);
  function pintarPlantilla(filtro) {
    $("#fichas").innerHTML = PLANTILLA.filter((p) => filtro === "todas" || p.sede === filtro).map((p) => {
      const villa = p.sede === "villa";
      const foto = p.foto
        ? `<img src="${esc(p.foto)}" alt="Ficha de ${esc(p.nombre)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'iniciales',textContent:'${esc(iniciales(p.nombre))}'}))">`
        : `<span class="iniciales" aria-hidden="true">${esc(iniciales(p.nombre))}</span>`;
      const video = p.video
        ? `<a href="https://www.youtube.com/watch?v=${esc(p.video)}" target="_blank" rel="noopener">▶ Ver su presentación</a>`
        : (p.grabado ? "Vídeo de presentación grabado · pronto en YouTube" : "Vídeo de presentación: próximamente");
      return `<article class="ficha">
        <div class="foto">${foto}</div>
        <div>
          <span class="sede-chip ${villa ? "villa" : ""}">${villa ? "Villacándida" : "El Páramo"}</span>
          <p class="nombre">${esc(p.nombre)}</p>
          <dl>
            <dt>Puesto</dt><dd>${esc(p.puesto)}</dd>
            <dt>Edad</dt><dd>${esc(p.edad)}${typeof p.edad === "number" ? " años" : ""}</dd>
            <dt>Antigüedad</dt><dd>${esc(p.antiguedad)}</dd>
          </dl>
        </div>
        <p class="frase">«${esc(p.frase)}»</p>
        <p class="perfil">${esc(p.perfil)}</p>
        <p class="video">${video}</p>
      </article>`;
    }).join("") + (filtro === "todas" ? FICHA_MIGUEL : "");
  }
  const T = (n) => `<span class="tachon" style="width:${n}ch" aria-label="tachado"></span>`;
  const FICHA_MIGUEL = `<article class="ficha ficha-miguel">
        <div class="foto"><span class="silueta" aria-hidden="true">?</span></div>
        <div>
          <span class="sede-chip">${T(7)}</span>
          <p class="nombre">Miguel</p>
          <dl>
            <dt>Puesto</dt><dd>${T(9)}</dd>
            <dt>Edad</dt><dd>${T(3)}</dd>
            <dt>Antigüedad</dt><dd>${T(11)}</dd>
          </dl>
        </div>
        <p class="frase">«${T(18)}»</p>
        <p class="perfil">${T(24)} ${T(12)}</p>
        <span class="sello sello-miguel">¿Quién es Miguel?</span>
      </article>`;
  document.querySelectorAll(".filtros button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".filtros button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    pintarPlantilla(b.dataset.f);
  }));
  pintarPlantilla("todas");
  $("#total-plantilla").textContent = PLANTILLA.length;

  /* Tienda */
  $("#productos").innerHTML = PRODUCTOS.map((p) => `<article class="producto">
      <div class="img">${p.img
        ? `<img src="${esc(p.img)}" alt="${esc(p.nombre)}" loading="lazy" onerror="this.onerror=null;this.src='img/logo-3d.jpg'">`
        : `<div class="sin-foto"><span class="sello">Foto en camino</span></div>`}</div>
      <div class="cuerpo">
        <span class="ref">Ref. ${esc(p.ref)}</span>
        <h3>${esc(p.nombre)}</h3>
        <p>${esc(p.texto)}</p>
        <div class="pie">
          <span class="precio">${esc(p.precio)}<small>Precio orientativo</small></span>
          ${p.shopify
            ? `<div class="shopify" data-shopify="${esc(p.shopify)}"></div>`
            : `<button class="btn tinta" type="button" data-quiero="${esc(p.nombre)}">¡Lo quiero!</button>`}
        </div>
      </div>
    </article>`).join("");
  $("#suministros").innerHTML = SUMINISTROS.map((s) => `<tr>
      <td>${esc(s.ref)}</td><td><strong>${esc(s.nombre)}</strong><br><small>${esc(s.nota)}</small></td>
      <td><button type="button" data-quiero="${esc(s.nombre)}">¡Lo quiero!</button></td></tr>`).join("");

  /* Diálogo "Lo quiero" */
  const dlg = $("#dlg-quiero");
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-quiero]");
    if (!b) return;
    $("#q-producto").value = b.dataset.quiero;
    $("#q-titulo").textContent = b.dataset.quiero;
    $("#form-quiero .estado").textContent = "";
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  });
  $("#dlg-cerrar").addEventListener("click", () => dlg.close ? dlg.close() : dlg.removeAttribute("open"));

  /* Teorías sobre Miguel en Atención al Cliente */
  document.querySelectorAll('a[href="#teorias"]').forEach((a) => a.addEventListener("click", () => { const m = $("#a-motivo"); if (m && !m.value) m.value = "Mi teoría sobre Miguel"; }));

  /* Envío de formularios */
  document.querySelectorAll("form[data-asunto]").forEach((f) => f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const estado = $(".estado", f);
    if (!f.reportValidity()) return;
    const datos = Object.fromEntries(new FormData(f).entries());
    if (datos._honey) return;
    delete datos._honey;
    // Prueba del consentimiento: qué casillas marcó y cuándo
    datos.consentimiento = [...f.querySelectorAll(".check")].map((c) => c.textContent.trim()).join(" | ");
    datos.fecha_consentimiento = new Date().toISOString();
    datos._subject = f.dataset.asunto + (datos.producto ? `: ${datos.producto}` : "");
    datos._template = "table";
    estado.textContent = "Enviando...";
    const esBoletin = f.id === "form-boletin";
    try {
      if (esBoletin && CONFIG.boletin) {
        // Formulario de Brevo con doble confirmación
        const b = new FormData();
        b.append("EMAIL", datos.email);
        if (datos.nombre) b.append("FIRSTNAME", datos.nombre);
        b.append("OPT_IN", "1");
        b.append("email_address_check", "");
        b.append("locale", "es");
        await fetch(CONFIG.boletin, { method: "POST", mode: "no-cors", body: b });
        estado.textContent = f.dataset.ok;
        f.reset();
        return;
      }
      const r = await fetch(CONFIG.formulario, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(datos) });
      if (!r.ok) throw new Error();
      estado.textContent = esBoletin
        ? "Apuntado. Antes del primer boletín te llegará un email para confirmar tu alta. Si no lo confirmas, borramos tu dirección."
        : (f.dataset.ok || "Recibido. Te respondemos antes del próximo lunes 25.");
      f.reset();
    } catch (err) {
      estado.textContent = `No se ha podido enviar. Escríbenos a ${CONFIG.correo}.`;
    }
  }));

  /* Visítanos: sedes */
  $("#sedes").innerHTML = SEDES.map((d) => {
    const fotos = d.fotos.length
      ? d.fotos.map((f, i) => `<img src="${esc(f)}" alt="${esc(d.nombre)}, foto ${i + 1}" loading="lazy" onerror="this.remove()">`).join("")
      : `<div class="sin-foto"><span class="sello">Fotos en revelado</span></div>`;
    const video = d.video
      ? `<a class="btn hueco" href="https://www.youtube.com/watch?v=${esc(d.video)}" target="_blank" rel="noopener">▶ Ver el recorrido</a>`
      : `<span class="pronto">Recorrido en vídeo: próximamente</span>`;
    return `<article class="sede ${d.id}">
      <div class="galeria">${fotos}${d.postit && d.fotos.length ? `<span class="postit" aria-hidden="true">${esc(d.postit)}</span>` : ""}</div>
      <div class="sede-txt">
        <span class="pestana">${esc(d.tipo)}</span>
        <h3>${esc(d.nombre)}</h3>
        <p>${esc(d.texto)}</p>
        <dl>${d.datos.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        ${video}
      </div>
    </article>`;
  }).join("");

  /* Kiko espía */
  const kiko = $("#kiko"), boc = $("#kiko-boc"), cuerpo = $("#kiko-cuerpo");
  if (CONFIG.kikoImg) cuerpo.innerHTML = `<img src="${esc(CONFIG.kikoImg)}" alt="">`;
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let tKiko, quieto = false, nInf = 0;
  function asomar() {
    if (quieto || document.hidden) return programar();
    const izq = Math.random() < 0.45;
    kiko.classList.toggle("izq", izq);
    kiko.style.top = (22 + Math.random() * 56) + "%";
    requestAnimationFrame(() => kiko.classList.add("fuera"));
    if (Math.random() < 0.7) {
      setTimeout(() => { boc.textContent = KIKO.frases[Math.floor(Math.random() * KIKO.frases.length)]; boc.classList.add("ver"); }, 600);
      setTimeout(() => boc.classList.remove("ver"), 3200);
    }
    tKiko = setTimeout(() => { if (!quieto) kiko.classList.remove("fuera"); programar(); }, 4200);
  }
  function programar() { clearTimeout(tKiko); tKiko = setTimeout(asomar, 7000 + Math.random() * 9000); }
  kiko.addEventListener("mouseenter", () => { quieto = true; });
  kiko.addEventListener("mouseleave", () => { quieto = false; setTimeout(() => { if (!quieto) kiko.classList.remove("fuera"); }, 900); programar(); });
  const dlgK = $("#dlg-kiko");
  function siguienteDato() { $("#kiko-dato").textContent = KIKO.informe[nInf % KIKO.informe.length]; $("#kiko-num").textContent = "Informe nº " + String(++nInf).padStart(3, "0"); }
  kiko.addEventListener("click", () => { siguienteDato(); kiko.classList.remove("fuera"); boc.classList.remove("ver"); if (dlgK.showModal) dlgK.showModal(); else dlgK.setAttribute("open", ""); });
  $("#kiko-otra").addEventListener("click", siguienteDato);
  $("#kiko-cerrar").addEventListener("click", () => { dlgK.close ? dlgK.close() : dlgK.removeAttribute("open"); quieto = false; programar(); });
  setTimeout(asomar, reducido ? 6000 : 3500);

  /* Año del pie */
  $("#anio").textContent = new Date().getFullYear();
})();
