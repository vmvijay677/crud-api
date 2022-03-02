export function NotFound() {
  const styles = {
    width: "100%",
    height: "100%"
  };
  return (
    <div>
      <h1 className="not-found">404 Not Found</h1>
      <img style={styles} alt="404-not-found" src="https://i.pinimg.com/originals/99/40/a5/9940a5a30d960f42361482ff22ecf17f.gif"></img>
    </div>
  );
}
