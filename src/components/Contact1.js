import "./Contact1.css";
function Contact1() {
  return (
    <div className="contact">
      <h1>Will be grateful to have your message to us!!</h1>
      <form>
        <input placeholder="Your name" />
        <input placeholder="Email" />
        <input placeholder="Phone no." />
        <textarea placeholder="Message" rows="4"></textarea>
      </form>
    </div>
  );
}
export default Contact1;
