class IfLocalhostElement extends HTMLElement {
  constructor() {
    super()
    if (location.hostname.includes('localhost')) {
      const shadow = this.attachShadow({ mode: 'open' })
      shadow.innerHTML = `
        <style>
          :host {
            --_border-color: var(--border, red);
            --_background-color: hsl(from var(--_border-color) h s l / 30%);
            --_text-color: var(--text, black);

            display: block;
            position: fixed;
            inset: 2rem;
            top: auto;
          }

          p {
            color: var(--_text-color);
            border: 5px solid var(--_border-color);
            background: var(--_background-color);
            padding: 0.5rem;
            border-radius: 2rem;
            width: max-content;
            margin: 0 auto;
          }
        </style>

        <p>
          You are on ${location.hostname}!
        </p>
      `
    }
  }
}

if (!customElements.get('if-localhost')) {
  customElements.define('if-localhost', IfLocalhostElement)
}
