function CountryCard(props) {
  if (props.pic === "an" || props.pic === "cs") {
    // missing from api
  }
  return (
    <div className="country-comp" onClick={props.onClick}>
      <h4 className="country-name">{props.name}</h4>
      <img
        className="country-pic"
        src={`https://flagcdn.com/32x24/${props.pic.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/32x24/${props.pic.toLowerCase()}.png 2x,
        https://flagcdn.com/48x36/${props.pic.toLowerCase()}.png 3x`}
        width="16"
        height="12"
        alt="pic of country"
      />
    </div>
  );
}
export default CountryCard;
