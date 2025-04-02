function Footer() {
    const footerStyle = {
      position: "fixed",
      bottom: 0,
      width: "100%",
      textAlign: "center",
      padding: "10px 0",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
      color: "white",
      fontSize: "14px",
    };
  
    return (
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Ashish Sharma | All Rights Reserved</p>
      </footer>
    );
  }
  
  export default Footer;
  