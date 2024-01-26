export const EmailTemplate = (name, email, message) => {
  return (
    <div>
      <h3>New Email from ARX Logicwave Website</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};
