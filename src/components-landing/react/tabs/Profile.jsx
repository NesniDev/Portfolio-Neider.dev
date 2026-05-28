import { Highlight, themes } from 'prism-react-renderer'

export function Profile({ codigoString, info }) {
  return (
    <Highlight
      theme={themes.vsDark}
      code={codigoString}
      language={info.lenguaje}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          // 1. Agregamos w-full y quitamos overflow-x-auto
          className={`${className} font-jetbrains w-full`}
          style={{
            ...style,
            backgroundColor: 'transparent',
            padding: 0,
            fontSize: '0.95rem'
          }}
        >
          {tokens.map((line, i) => (
            // 2. Cambiamos de table-row a flex
            <div key={i} {...getLineProps({ line, className: 'flex' })}>
              {/* 3. Ancho fijo para los números (w-12) y evitamos que se encojan (shrink-0) */}
              <span
                className="w-12 shrink-0 text-right pr-4 select-none text-gray-500
"
              >
                {i + 1}
              </span>

              {/* 4. flex-1 ocupa el resto, whitespace-pre-wrap respeta la sangría pero permite el salto de línea */}
              <span className="flex-1 whitespace-pre-wrap">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
