export default function Whatsapp() {
  return (
    <div className="whatsapp-fixed">
      <a href="https://wa.me/+51956064945?text=Hola"   rel="noreferrer" target="_blank" className="not-a wpp-card px-3 py-2 flex space-x-3">
        <img src="/images/wa.png" alt="" width={20}/>
        <span className="text-white">Whatsapp</span>
      </a>
    </div>
  );
}
