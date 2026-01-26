import "./IframeContainer.module.css";

function IframeContainer() {
  return (
    <div className="iframe-container">
      <iframe
        src="https://nistros-io.github.io/nistros-io.github.io/"
        title="Nistros Iframe"
        className="nistros-iframe"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
  );
}

export default IframeContainer;
