function ContentTab(props) {
  const { item } = props;
  return (
    <>
      <p>key : {item.key}</p>
      <p>label : {item.label}</p>
      <p>children : {item.children}</p>
    </>
  );
}

export default ContentTab;
