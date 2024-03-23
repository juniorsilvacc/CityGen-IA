export default function QRCodeGenerator() {
  return (
    <div>
      <iframe 
        src="https://www.qrgpt.io/start" 
        title="QR Code Generator"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
