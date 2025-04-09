
type FooterType = {
  limitPages: number; 
  onReset: () => void; 
  onLoadMore: () => void; 
}

const Footer = ({ limitPages, onReset, onLoadMore }: FooterType) => {
  return (
    <div className="action-buttons">
      <span>Mostrando {limitPages} resultados</span>
      <button onClick={() => {onReset();}}>Reset</button>
      <button onClick={onLoadMore}>Load More</button>
    </div>
  );
};

export default Footer;
