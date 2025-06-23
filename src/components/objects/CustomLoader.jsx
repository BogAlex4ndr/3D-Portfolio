import { Html, useProgress } from '@react-three/drei';

const CustomLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          background: '#111',
          padding: '20px 30px',
          borderRadius: '12px',
          color: '#fff',
          fontFamily: 'monospace',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '12px',
            background: '#333',
            borderRadius: '6px',
            overflow: 'hidden',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #07b39b, #92d2ff)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <div>{Math.floor(progress)}% loading...</div>
      </div>
    </Html>
  );
};

export default CustomLoader;
