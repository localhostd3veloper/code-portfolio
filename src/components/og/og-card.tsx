interface OgCardProps {
  title: string;
  subtitle: string;
  tag: string;
}

export function OgCard({ title, subtitle, tag }: OgCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0a',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '24px 40px',
          backgroundColor: '#121213',
          borderBottom: '1px solid #2d2d2d',
        }}
      >
        <div
          style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: '#ff5f57' }}
        />
        <div
          style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: '#febc2e' }}
        />
        <div
          style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: '#28c840' }}
        />
        <div style={{ marginLeft: 20, color: '#8a8a8a', fontSize: 24 }}>{tag}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          gap: 20,
          padding: '0 72px',
        }}
      >
        <div style={{ display: 'flex', color: '#ededed', fontSize: 76, fontWeight: 700 }}>
          {title}
        </div>
        <div style={{ display: 'flex', color: '#3b82f6', fontSize: 38, fontWeight: 500 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}
