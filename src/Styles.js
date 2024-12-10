
    export const styles = {
      
    container: {
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    header: {
      background: "linear-gradient(135deg, #006400, #32CD32)", // Green gradient background
      color: "#fff",
      padding: "40px 20px", // Increased padding for better spacing
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow for depth effect
      borderBottom: "5px solid #004d00", // Border at the bottom for separation
      borderRadius: "10px 10px 0 0", // Rounded corners on top for a softer look
      marginBottom: "0px", // Space between header and content
    },
    title: {
      margin: "0",
      fontSize: "3em", // Larger font size for the title
      fontWeight: "700", // Bold font weight
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Shadow effect for the title text
    },
    subtitle: {
      margin: "10px 0 0",
      fontSize: "1.5em",
      fontWeight: "400", // Lighter font weight for the subtitle
      letterSpacing: "1px", // Slightly spaced letters for clarity
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow effect for the subtitle text
    },
    main: {
      display: "flex",
      flex: 1,
    },
    imageContainer: {
      flex: 1,
      backgroundColor: "#f4f4f4",
      padding: "20px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      borderRadius: "20px",
    },
    imageIcon: {
      width: "5%",
      //borderRadius: "5px",
      float: "left", 
      marginRight: "10px",
    },
    imageCaption: {
      marginTop: "10px",
      fontStyle: "italic",
      color: "#555",
    },
    dashboard: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      padding: "20px",      
    },
    heading: {
      border: "2px solid #aaa", // Added 'solid' for proper border definition
      marginBottom: "5px",
      marginTop: "0", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "20px",
    },
    stats: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#388E3C", // Green color for the header row
      color: "#fff", // White text color
      fontWeight: "bold",
      borderRadius: "5px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#e8f5e9",
      borderRadius: "5px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    cell: {
      flex: 1,
      textAlign: "center",
      fontSize: "1em",
    },
    footer: {
      backgroundColor: "#004d00",
      color: "#fff",
      textAlign: "center",
      padding: "1px",
      marginTop :"10px",
    }
  };