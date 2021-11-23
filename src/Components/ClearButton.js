function ClearButton(props) {
  return (
    <div>
      <div onClick={props.onClick} className="clear-btn">
        ✖
      </div>
    </div>
  );
}
export default ClearButton;
