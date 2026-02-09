import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Sunset on a Beach";
    this.image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e0/ce/85/sunset-beach.jpg?w=1200&h=-1&s=1";
    this.alt = "Photo of a beach";
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String }
    };
  }

  static get styles() {
    return css`
      .card {
        width: 300px;
        border: 2px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
        padding: 16px;
      }

      img {
        width: 100%;
        border-radius: 8px;
      }

      .card-button {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 12px;
        background: blue;
        color: white;
        text-decoration: none;
        border-radius: 5px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="${this.alt}" />
        <h2>${this.title}</h2>
        <p>This is a paragraph for the beautiful Sunset on a Beach.</p>
        <a href="https://hax.psu.edu" class="card-button">Details</a>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
