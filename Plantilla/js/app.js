(function attachConsoleToContainer(options = {}) {
  const cfg = {
    container: options.container || '#log',
    createIfMissing: options.createIfMissing !== false, // true por defecto
    levels: options.levels || ['log', 'info', 'warn', 'error', 'debug'],
    showTimestamp: options.showTimestamp !== false, // true por defecto
    maxLines: typeof options.maxLines === 'number' ? options.maxLines : 2000
  };

  // Busca o crea el contenedor
  let el = document.querySelector(cfg.container);
  if (!el && cfg.createIfMissing) {
    el = document.createElement('div');
    el.id = cfg.container.replace(/^#/, '');
    // el.style.cssText = 'font:12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; white-space:pre-wrap; line-height:1.35; padding:8px; border:1px solid #ddd; border-radius:8px; max-height:280px; overflow:auto;';
    document.body.appendChild(el);
  }
  if (!el) return; // sin contenedor, no parcheamos

  // Guarda originales y expone un restore()
  const original = {};
  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const timestamp = () => {
    const d = new Date();
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  // JSON.stringify seguro ante referencias circulares
  const safeStringify = (val) => {
    const seen = new WeakSet();
    try {
      return JSON.stringify(val, (k, v) => {
        if (typeof v === 'object' && v !== null) {
          if (seen.has(v)) return '[Circular]';
          seen.add(v);
        }
        return v;
      }, 2);
    } catch {
      try { return String(val); } catch { return '[Unserializable]'; }
    }
  };

  const formatArg = (arg) => {
    if (typeof arg === 'string') return arg;
    if (typeof arg === 'number' || typeof arg === 'bigint' || typeof arg === 'boolean' || arg === null || arg === undefined) {
      return String(arg);
    }
    // Error con stack
    if (arg instanceof Error) {
      return (arg.stack || (arg.name + ': ' + arg.message));
    }
    // Objetos / arrays
    return safeStringify(arg);
  };

  // Batching para reducir reflows
  let buffer = [];
  let scheduled = false;
  const flush = () => {
    if (!buffer.length) return;
    const frag = document.createDocumentFragment();
    for (const { level, text } of buffer) {
      const line = document.createElement('div');
      // estilo por nivel
      if (level === 'warn') line.style.color = '#c7bd2eff';
      if (level === 'error') line.style.color = '#a83533ff';
      if (level === 'info') line.style.color = '#352e99ff';
      if (level === 'debug') line.style.color = '#338eb3ff';
      if (level === 'log') line.style.color = '#0d0e0dff';

      line.textContent = text; // evita XSS
      frag.appendChild(line);
    }
    el.appendChild(frag);

    // Límite de líneas
    if (cfg.maxLines > 0) {
      while (el.childNodes.length > cfg.maxLines) {
        el.removeChild(el.firstChild);
      }
    }

    // Auto-scroll si ya estaba al final
    el.scrollTop = el.scrollHeight;

    buffer = [];
    scheduled = false;
  };
  const enqueue = (entry) => {
    buffer.push(entry);
    if (!scheduled) {
      scheduled = true;
      queueMicrotask(flush);
    }
  };

  // Parchea niveles
  cfg.levels.forEach((level) => {
    original[level] = console[level] ? console[level].bind(console) : undefined;
    console[level] = function (...args) {
      const ts = cfg.showTimestamp ? `[${timestamp()}] ` : '';
      const lbl = level.toUpperCase();
      const text = `${ts}${lbl}: ${args.map(formatArg).join(' ')}`;

      enqueue({ level, text });

      // Llama al original si existe
      if (original[level]) {
        try {
          original[level](...args);
        } catch (_) {
          // ignora errores del original
        }
      }
    };
  });

  // Expone un método para restaurar
  console.__restoreToOriginal__ = function () {
    Object.keys(original).forEach((k) => {
      if (original[k]) console[k] = original[k];
    });
    delete console.__restoreToOriginal__;
  };
})();

