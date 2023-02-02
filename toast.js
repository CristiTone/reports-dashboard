const template = document.createElement('template');
template.innerHTML = `
  <style>
  .toast {
    position: fixed;
    z-index: 10;
    right: 0;
    bottom: 93px;
    margin: 1.5rem;
    background-color: #268e6c;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    border-radius: 4px;
  }
  
  .toast p {
    border-right: 1px solid rgba(255, 255, 255, 0.38);
    padding: 0.5rem 1rem 0.5rem 0;
  }
  </style>
  <div class="toast">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="2 2 20 20"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
        fill="#fff"
        fill-rule="evenodd"
        data-name="Path 198"
      />
    </svg>
    <p>Successfully saved the report</p>
    <slot name="close-toast"></slot>
  </div>
`;

class CustomToast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('custom-toast', CustomToast);
