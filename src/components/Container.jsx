export const Container = ({ children, direction = 'column', style }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: direction,
      marginTop: '6px',
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);
