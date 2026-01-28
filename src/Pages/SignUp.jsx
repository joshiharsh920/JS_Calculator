function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setUser({
      email,
      favorites: [],
      rentedMovies: []
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
