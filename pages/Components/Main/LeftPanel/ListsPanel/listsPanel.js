export default function ListsPane(props) {
  const {logoPanel, listsname} = props;
  return (
    <div className="list-panel">
      <img src={logoPanel} alt={'logoPanel'} />
      <strong>{listsname}</strong>
    </div>
  );
}
