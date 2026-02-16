import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Default Title";
    this.image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/ce/85/sunset-beach.jpg?w=1200&h=-1&s=1";
    this.alt = "Default image";
    this.fancy = false;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      fancy: { type: Boolean, reflect: true
    }
  }
  }
  static get styles() {
    return css`
      :host {
        --card-bg: white;
        --card-border: #ccc;
        --card-button-bg: blue;
        --card-button-hover: darkblue;
      }

      .card {
        width: 300px;
        border: 2px solid var(--card-border);
        border-radius: 10px;
        overflow: hidden;
        padding: 16px;
        background-color: var(--card-bg);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .card:hover {
        transform: translateY(-5px);
        box-shadow: 4px 4px 12px rgba(0,0,0,0.3);
      }

      img {
        width: 100%;
        border-radius: 8px;
      }

      h2 {
        margin: 10px 0 6px 0;
        font-size: 1.2rem;
        color: #333;
      }

      .content {
        font-size: 0.95rem;
        color: #333;
      }

      .card-button {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 12px;
        background: var(--card-button-bg);
        color: white;
        text-decoration: none;
        border-radius: 5px;
      }

      .card-button:hover {
        background: var(--card-button-hover);
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="${this.alt}" />
        <h2>${this.title}</h2>

        <div class="content">
          <slot></slot>
        </div>

        <!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}"></details>
        
        <details ?open="${this.fancy}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
        
        <a href="https://hax.psu.edu" class="card-button">
          <slot name="button">Details</slot>
        </a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
